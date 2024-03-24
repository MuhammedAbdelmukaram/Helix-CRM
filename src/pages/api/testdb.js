// pages/api/testdb.js
import dbConnect from '../../lib/dbConnect';

export default async function handler(req, res) {
    try {
        await dbConnect();
        // If the connection is successful, send a success message
        res.json({ message: 'Successfully connected to MongoDB.' });
    } catch (error) {
        // If the connection fails, catch the error and send an error message
        res.status(500).json({ error: error.message });
    }
}
