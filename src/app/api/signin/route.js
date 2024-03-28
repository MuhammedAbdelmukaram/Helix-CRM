import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import dbConnect from "@/lib/dbConnect";
import UserProfile from "@/models/userModel";

export async function POST(request) {
  await dbConnect();

  try {
    const data = await request.json();
    const { email, password } = data;

    const user = await UserProfile.findOne({ email });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET, // Ensure this is set
      { expiresIn: "1h" }
    );

    return NextResponse.json({ token });
  } catch (error) {
    return NextResponse.json(
      {
        error: error.message,
      },
      { status: 500 }
    );
  }
}
