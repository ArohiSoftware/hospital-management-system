import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


export const getUserProfile = async (req, res) => {
  const {id} = req.user;

  
console.log(req.user)
  try {
    const staff = await prisma.staff.findUnique({
      where: { id: Number(id) },
    });

    if (!staff) {
      return res.status(404).json({ error: 'Staff not found' });
    }

    return res.json(staff);
  } catch (error) {
    console.error('Error fetching staff:', error.message);
    return res.status(500).json({ error: 'Error fetching staff' });
  }
};
