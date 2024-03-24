// pages/api/submitForm.js
import dbConnect from '../../lib/dbConnect';
import YourModel from '../../models/userModel';

export default async function handler(req, res) {
    await dbConnect();

    if (req.method === 'POST') {
        try {
            // Here, you can perform data validation or manipulation as needed.
            const entry = await YourModel.create(req.body);
            res.status(201).json({ success: true, data: entry });
        } catch (error) {
            res.status(400).json({ success: false, error: error.message });
        }
    } else {
        // Handle any other HTTP methods
        res.status(405).json({ error: 'Method Not Allowed' });
    }
}
