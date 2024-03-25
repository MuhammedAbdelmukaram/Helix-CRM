// pages/api/submitForm.js
import dbConnect from '../../lib/dbConnect';
import UserProfile from '../../models/userModel'; // Adjusted for clarity
import bcrypt from 'bcrypt';

export default async function handler(req, res) {
    await dbConnect();

    if (req.method === 'POST') {
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
    } else {
        // Handle any other HTTP methods
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
