const express = require("express");
const authMiddleware = require("../middlewares/auth");
const complaintModel = require("../models/complaintModel");
const router = express.Router();

router.post("/create", authMiddleware, async (req, res) => {
    const { category, detail } = req.body;

    if (!category || !detail) return res.status(400).json({ message: 'Invalid request' });

    try {
        const existing = await complaintModel.findOne({ category, detail });
        if (existing) return res.json({ message: "Complaint already exists"});

        const complaint = new complaintModel({
            residentId: req.user._id,
            houseNo: req.user.houseNo,
            category,
            detail,
        });
        await complaint.save();
    
        res.json(complaint);
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

        const complaint = await complaintModel.find({ residentId: req.user._id})
            .sort({ date: 1 })  // Optional: Sort complaint by date (ascending)
            .skip((pageNumber - 1) * limitNumber)  // Skip complaint based on current page
            .limit(limitNumber);  // Limit the number of complaint returned

        res.json(complaint);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to fetch complaints" });
    }
});

router.put("/:id", authMiddleware, async (req, res) => {
    const { id } = req.params;
    const { category, detail } = req.body;

    try {
        const updatedComplaint = await complaintModel.findByIdAndUpdate(
            id,
            { category, detail },
            { new: true, runValidators: true }  // `new: true` ensures the returned event is the updated one
        );

        if (!updatedComplaint) return res.status(404).json({ message: "Event not found" });

        res.json(updatedComplaint);  
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to update complaint" });
    }
});

router.delete("/:id", authMiddleware, async (req, res) => {
    try {
        const complaintId = req.params.id;
        
        const complaint = await complaintModel.findByIdAndDelete(complaintId);
        if (!complaint) {
            return res.status(404).json({ message: "Complaint not found" });
        }

        res.json({ message: "Complaint deleted successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Failed to delete complaint" });
    }
});

module.exports = router;