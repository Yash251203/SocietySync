const express = require("express");
const userModel = require("../models/userModel");
const router = express.Router();
const authMiddleware = require("../middlewares/auth");
const upload = require("../configs/multer");

router.get("/", authMiddleware, async (req, res) => {
    try {
        const user = await userModel.findById(req.user._id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json({
            user: {
                name: user.name,
                email: user.email,
                houseNo: user.houseNo,
                profilePicture: user.profilePicture
            }
        });
    } catch (err) {
        res.status(500).json({ message: "Error fetching user data" });
    }
});


router.put("/profile-picture", authMiddleware, upload.single("profilePicture"), async (req, res) => {
    try { 
        const user = await userModel.findById(req.user._id);
        if (!user) return res.status(404).json({ message: "User not found" });

        if (!req.file) return res.status(400).json({ message: "No file uploaded" });

        user.profilePicture = {
            data: req.file.buffer,
            contentType: req.file.mimetype,
        };
        await user.save();

        res.json({ message: "Profile picture updated successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Failed to update profile picture" });
    }
});

router.put("/", authMiddleware, async (req, res) => {
    const { name, email, password, houseNo } = req.body;

    try {
        const user = await userModel.findById(req.user._id);
    
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        if (name) {
            user.name = name;
        }
        if (email && email !== user.email) {
            const existingUser = await userModel.findOne({ email });
            if (existingUser) {
                return res.status(400).json({ message: "Email is already in use" });
            }
            user.email = email;
        }
        if (password) {
            const hashedPassword = await bcrypt.hash(password, 10);
            user.password = hashedPassword;
        }

        if (houseNo) {
            const existingUser = await userModel.findOne({ houseNo });
            if (existingUser) {
                return res.status(400).json({ message: "House number already exists" });
            }
            user.houseNo = houseNo;
        }
        await user.save();

        res.json({
            message: "User details updated successfully",
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                houseNo: user.houseNo,
            },
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Failed to update user details" });
    }
});

module.exports = router;