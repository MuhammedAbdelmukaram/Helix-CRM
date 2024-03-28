// pages/api/profile/route.js
import dbConnect from '@/lib/dbConnect';
import UserProfile from '@/models/userModel';

export async function GET(request, response) {
    const {
        query: { id },
        method,
    } = request;

    await dbConnect();

    switch (method) {
        case 'GET':
            try {
                const profile = await UserProfile.findById(id);
                if (!profile) {
                    return response.status(404).json({ message: 'Profile not found' });
                }
                response.status(200).json(profile);
            } catch (error) {
                response.status(500).json({ message: error.message });
            }
            break;
        default:
            response.setHeader('Allow', ['GET']);
            response.status(405).end(`Method ${method} Not Allowed`);
    }
}
