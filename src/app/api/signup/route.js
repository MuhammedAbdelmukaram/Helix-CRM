import bcrypt from "bcrypt";

import dbConnect from "@/lib/dbConnect";

import UserProfile from "@/models/userModel"; // Adjusted for clarity

export async function POST(req, res) {
  await dbConnect();

  try {
    const { password, ...rest } = req.body;

    // Hash password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Here, you can perform data validation or manipulation as needed.
    const entry = await UserProfile.create({
      ...rest,
      password: hashedPassword, // Store the hashed password
    });

    res.status(201).json({ success: true, data: entry });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
}
