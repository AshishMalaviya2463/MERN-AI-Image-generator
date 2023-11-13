const { Router } = require("express");
const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const authRoutes = Router()

authRoutes.post("/login", async (req, res) => {
    console.log("req.body", req.body);
    const { email, password } = req.body
    const user = await User.findOne({ email })
    if (!user) {
        return res.status(400).json({ message: "Invalid credentials" })
    }
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
        return res.status(400).json({ message: "Invalid credentials" })
    }
    const token = await jwt.sign(user.toJSON(), process.env.JWT_SECRET_KEY)
    const returnData = {
        username: user.username,
        email: user.email,
    }
    return res.json({ message: "Login Successful", token, data: returnData })
})

authRoutes.post("/register", async (req, res) => {
    const { username, email, password } = req.body
    const existingUser = await User.find({ email })
    if (existingUser.length > 0) {
        return res.status(400).json({ message: "User already exists" })
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    const newUser = new User({ username, email, password: hashedPassword })
    await newUser.save()
    return res.status(201).json({ message: "Registration successful." })
})

module.exports = { authRoutes }