// pages/api/login.js
import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import UserProfile from "@/models/userModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
    await dbConnect();

    if (req.method === 'POST') {
        try {
            const { email, password } = req.body;

            // Find the user by email
            const user = await UserProfile.findOne({ email });

            if (!user) {
                return new NextResponse(JSON.stringify({ error: 'User not found' }), { status: 404 });
            }

            // Verify the password
            const isMatch = await bcrypt.compare(password, user.password);

            if (!isMatch) {
                return new NextResponse(JSON.stringify({ error: 'Invalid credentials' }), { status: 401 });
            }

            // User authenticated, create a token
            const token = jwt.sign(
                { userId: user._id },
                process.env.JWT_SECRET, // Ensure this is set
                { expiresIn: '1h' }
            );

            // Return the token to the client
            const response = new NextResponse(JSON.stringify({ token }), {
                status: 200,
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            return response;
        } catch (error) {
            return new NextResponse(JSON.stringify({ error: 'Internal server error' }), { status: 500 });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        return new NextResponse(`Method ${req.method} Not Allowed`, { status: 405 });
    }
}
