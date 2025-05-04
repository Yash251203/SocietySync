const express = require("express");
const authMiddleware = require("../middlewares/auth");
const userModel = require("../models/userModel");
const router = express.Router();

router.get("/", authMiddleware, async (req, res) => {
    console.log(req.user)
    res.json(req.user);
});

module.exports = router;