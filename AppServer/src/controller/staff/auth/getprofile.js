import prisma from '../../../db/index.js';
import jwt from 'jsonwebtoken';

export async function getProfile(req, res) {
  try {

    const authHeader = req.headers.authorization;
    console.log(req.headers.authorization)
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'Authorization token missing or invalid' });
    }

    const token = authHeader.split(' ')[1];

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded || !decoded.id) {
      return res.status(401).json({ error: 'Invalid token' });
    }

    const staffMember = await prisma.staff.findUnique({
      where: {
        id: decoded.id,
      },
      select: {
        id: true,
        name: true,
        email: true,
        user: true,
        role: true,
      },
    });

    if (!staffMember) {
      return res.status(404).json({ error: 'Staff member not found' });
    }

    return res.status(200).json({ profile: staffMember });
  } catch (error) {
    console.error('Error fetching profile:', error.message);
    return res.status(500).json({ error: 'Error fetching profile' });
  }
}
