import { connectToDB } from "@/lib/mongoose";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import User from "@/lib/models/user.model";
import { sendEmail } from "@/helpers/mailer";
require('jsonwebtoken');
export async function POST(request: NextRequest) {
    try {
        connectToDB();

        // Parse the request body as JSON
        const body = await request.json();

        // Destructure the body to extract user data
        const {username, email, password } = body;

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return NextResponse.json({ error: "User already exists" }, { status: 400 });
        }

        // Hash the password
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);

        // Create a new user object
        const newUser = new User({
            username,
            email,
            password: hashedPassword
        });

        // Save the new user to the database
        const savedUser = await newUser.save();

        //Send verefy token

        await sendEmail({email, emailType: "VERIFY", userId: savedUser._id})
        
        // Respond with success message
        return NextResponse.json({
            message: "User created successfully",
            success: true,
            savedUser
        });

    } catch (error: any) {
        // Handle errors
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
