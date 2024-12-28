import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


export const deleteStaff = async (req, res) => {
  const { id } = req.params; 

 
  const staffId = parseInt(id);

  if (isNaN(staffId)) {
    return res.status(400).json({ error: 'Invalid staff ID' });
  }

  try {
    
    const staff = await prisma.staff.findUnique({
      where: { id: staffId },
    });
    if (!staff) {
      return res.status(404).json({ error: 'Staff not found' });
    }

    await prisma.staff.delete({
      where: { id: staffId },
    });

   
    return res.status(200).json({ message: 'Staff deleted successfully' });
  } catch (error) {
    console.error('Error deleting staff:', error);
    return res.status(500).json({ error: 'Failed to delete staff' });
  }
};
