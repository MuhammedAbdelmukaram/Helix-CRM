import { NextResponse } from "next/server";

import dbConnect from "@/lib/dbConnect";
import UserProfile from "@/models/userModel";

export async function POST(request) {
  await dbConnect();

  try {
    const data = await request.json();
    const { password, email, mobile, ...rest } = data;

    const entry = await UserProfile.find({
      mobile,
    });

    if (!entry)
      return NextResponse.json(
        {
          success: false,
          error: "User not found",
        },
        { status: 200 }
      );

    const isPasswordCorrect = await bcrypt.compare(password, entry.password);

    if (!isPasswordCorrect)
      return NextResponse.json(
        {
          success: false,
          error: "Wrong password",
        },
        { status: 200 }
      );

    return NextResponse.json({ success: true, data: entry }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error.message,
      },
      { status: 400 }
    );
  }
}
