const express = require("express");
const userModel = require("../models/userModel");
const router = express.Router();
const authMiddleware = require("../middlewares/auth");
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");

router.post("/register", async (req, res) => {
    const { name, email, password, houseNo } = req.body;

    try {
        const existing = await userModel.findOne({ email });
        if (existing) return res.status(400).json({ message: 'User already Exists' });

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new userModel({
            name,
            email,
            houseNo,
            password: hashedPassword,
            profilePicture: req.file ? {
                data: req.file.buffer,
                contentType: req.file.mimetype
            } : undefined
        });
        await newUser.save();

        const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '30d' });

        res.json({ token, user: { id: newUser._id, name: newUser.name, houseNo: newUser.houseNo, email: newUser.email, profilePicture: !!newUser.profilePicture?.data, } });
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Oops! Something broke. We're working on it."});
    }
});

router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await userModel.findOne({email});
        if (!user) return res.status(400).json({ message: 'User not found' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '30d' });

        res.json({ token, user: { id: user._id, name: user.name, houseNo: user.houseNo, email: user.email } });    
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Oops! Something broke. We're working on it."});
    }
});

router.get("/me", authMiddleware, (req, res) => {
    res.json(req.user);
})

// router.get("/profile-picture", authMiddleware, async (req, res) => {
//     try {
//       const user = await userModel.findById(req.user._id);
//       if (!user || !user.profilePicture || !user.profilePicture.data) {
//         return res.status(404).json({ message: "Profile picture not found" });
//       }
  
//       res.set("Content-Type", user.profilePicture.contentType);
//       res.send(user.profilePicture.data);
//     } catch (error) {
//       res.status(500).json({ message: "Failed to retrieve profile picture" });
//     }
//   });
  

module.exports = router;