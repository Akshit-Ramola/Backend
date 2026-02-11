const express = require("express")
const userModel = require("../models/user.model")
const jwt = require("jsonwebtoken")
const crypto = require("crypto")
const { json } = require("stream/consumers")
const authRouter = express.Router()


authRouter.post("/register", async(req, res) => {
    const { name, email, password } = req.body;
    const isUserAlreadyExists = await userModel.findOne({ email })
    if (isUserAlreadyExists) {
        return res.status(409).json({
            message: "User already exists with this email",
        })
    }



    const user = await userModel.create({
        name,
        email,
        password: crypto.createHash("md5").update(password).digest("hex"),
    })

    const token = jwt.sign({
        id: user._id,
        email: user.email
    }, process.env.JWT_SECRET, { expiresIn: "1h" })

    res.cookies("jwt_token", token)

    res.status(201).json({
        message: "Registered successfully",
        user,
        token
    })

})

authRouter.get("/get-me", async(req, res) = {
    const token = req.cookies.token

    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    const user = await userModel.findById(decoded._id)

    res.json({
        name: user.name,
        email: user.email
    })

})

authRouter.post("/login", async(req, res) => {
    const { email, password } = req.body

    const user = await userModel.findOne({ email })

    if (!user) {
        return res.status(409).json({
            message: "User does not exists"
        })
    }

    const isPassword = user.password === crypto.createHash("md5").update(password).digest("hex")

    if (!isPassword) {
        return res.status(409).json({
            message: "Invalid Password"
        })
    }

    const token = jwt.sign({
        id: user._id,
        email: user.email
    }, process.env.JWT_SECRET, { expiresIn: "1h" })

    res.cookies("jwt_token", token)

    res.status(201).json({
        message: "Login Successful",
        user,
        token
    })
})

module.exports = authRouter