import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

import dbConnect from "@/lib/dbConnect";
import UserProfile from "@/models/userModel"; // Adjusted for clarity

export async function POST(request) {
  await dbConnect();

  try {
    const data = await request.json();
    const { password, ...rest } = data;

    // Hash password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Here, you can perform data validation or manipulation as needed.
    const entry = await UserProfile.create({
      ...rest,
      password: hashedPassword, // Store the hashed password
    });

    return NextResponse.json({ success: true, data: entry }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error.message,
      },
      { status: 500 }
    );
  }
}
