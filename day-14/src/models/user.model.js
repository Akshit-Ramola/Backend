const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: [true, "User name already exists"],
        required: [true, "User name is required"]
    },
    email: {
        type: String,
        unique: [true, "Email already exists"],
        required: [true, "Email is required"]
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },
    bio: String,
    profileImage: {
        type: String,
        default: "https://ik.imagekit.io/Aksh1t/default-avatar-profile-icon-of-social-media-user-photo-image-vector.webp"
    }
})

const userModel = mongoose.model("user", userSchema)

module.exports = userModel