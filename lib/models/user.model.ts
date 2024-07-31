import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String
    },
    name: {
        type: String,
    },
    surname: {
        type: String,
    },
    email: {
        type: String,
        required: [true, "Please provide a email"],
        unique: true,
    },
    phoneNumber: {
        type: String,
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
    },
    orders: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Order'
        }
    ],
    favourite: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product'
        }
    ],
    cart: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product'
        }
    ],
    discounts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Discount'
        }
    ],
    role: {
        type: String,
        default: 'User',
    },
    region: String,
    city: String,
    postalCode: String,
    street: String,
    isVerfied: {
        type: Boolean,
        default: false,
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,
    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product'
        }
    ]
})

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;