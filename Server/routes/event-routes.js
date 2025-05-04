const express = require("express");
const authMiddleware = require("../middlewares/auth");
const eventModel = require("../models/eventModel");
const router = express.Router();

router.post("/create", authMiddleware, async (req, res) => {
    const { title, description, venue, date} = req.body;

    if (!title || !date) return res.status(400).json({ message: 'Invalid request' });

    try {
        const existing = await eventModel.findOne({ title });
        if (existing) return res.json({ message: "Event already exists"});

        const event = new eventModel({
            title,
            description,
            venue,
            date,
            createdBy: req.user._id,
        });
        await event.save();
    
        res.json(event);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Oops! Something broke. We're working on it."});
    }
});

router.get("/", authMiddleware, async (req, res) => {
    try {
        // Get page and limit from query parameters, default to page 1 and limit 10
        const { page = 1, limit = 10 } = req.query;
        const pageNumber = parseInt(page, 10);
        const limitNumber = parseInt(limit, 10);

        const events = await eventModel.find()
            .sort({ date: 1 })  // Optional: Sort events by date (ascending)
            .skip((pageNumber - 1) * limitNumber)  // Skip events based on current page
            .limit(limitNumber);  // Limit the number of events returned

        res.json(events);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to fetch events" });
    }
});

router.put("/:id", authMiddleware, async (req, res) => {
    const { id } = req.params;
    const { title, description, venue, date } = req.body;

    try {
        const updatedEvent = await eventModel.findByIdAndUpdate(
            id,
            { title, description, venue, date },
            { new: true, runValidators: true }  // `new: true` ensures the returned event is the updated one
        );

        if (!updatedEvent) {
            return res.status(404).json({ message: "Event not found" });
        }

        res.json(updatedEvent);  
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to update event" });
    }
});

router.delete("/:id", authMiddleware, async (req, res) => {
    try {
        const eventId = req.params.id;
        
        const event = await eventModel.findByIdAndDelete(eventId);
        if (!event) {
            return res.status(404).json({ message: "Event not found" });
        }

        res.json({ message: "Event deleted successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Failed to delete event" });
    }
});

module.exports = router;