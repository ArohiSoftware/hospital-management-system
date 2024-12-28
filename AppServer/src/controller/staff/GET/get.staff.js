import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
// Get a Staff member by ID
export const getStaffById = async (req, res) => {
  const {id} = req.params;

  try {
    const staff = await prisma.staff.findUnique({
      where: { id: Number(id) },
    });

    if (!staff) {
      return res.status(404).json({ error: 'Staff not found' });
    }

    // Function to serialize staff data
    // const serializeStaff = (staff) => {
    //   return {
    //     ...staff,
    //     Staff_id: staff.Staff_id !== undefined && staff.Staff_id !== null ? staff.Staff_id.toString() : null, // Convert BigInt to string if it exists
    //     created_at: staff.created_at !== undefined && staff.created_at !== null ? staff.created_at.toISOString() : null, // Convert Date to ISO string if it exists
    //     updated_at: staff.updated_at !== undefined && staff.updated_at !== null ? staff.updated_at.toISOString() : null  // Convert Date to ISO string if it exists
    //   };
    // };

    // const serializedStaff = serializeStaff(staff);
    return res.json(staff);
  } catch (error) {
    console.error('Error fetching staff:', error.message);
    return res.status(500).json({ error: 'Error fetching staff' });
  }
};


// Get all Staff members
export const getAllStaff = async (req, res) => {
  try {
    const staffMembers = await prisma.staff.findMany();

    // Function to serialize staff data

    // console.log("staffmembers", staffMembers)

    // const serializeStaff = (staffMembers) => {
    //   return staffMembers.map(staff => ({
    //     ...staff,
    //     Staff_id: staff.Staff_id !== undefined && staff.Staff_id !== null ? staff.Staff_id.toString() : null, // Convert BigInt to string if it exists
    //     created_at: staff.created_at !== undefined && staff.created_at !== null ? staff.created_at.toISOString() : null, // Convert Date to ISO string if it exists
    //     updated_at: staff.updated_at !== undefined && staff.updated_at !== null ? staff.updated_at.toISOString() : null  // Convert Date to ISO string if it exists
    //   }));
    // };

        // const serializedStaffMembers = serializeStaff(staffMembers);
        return res.json(staffMembers);
    } catch (error) {
        console.error('Error fetching staff members:', error.message);
        return res.status(500).json({ error: 'Error fetching staff members' });
    }
};

//Get staff by name

export const getStaffByName = async (req, res) => {
  const { name } = req.body;

  try {
    const staff = await prisma.staff.findMany({
      where: {
        fullName: {
          contains: name,
          mode: 'insensitive',
        },

      },
      take: 5,
    });

    // Filter unique names
    const uniqueStaff = Array.from(
      new Set(staff.map((staff) => staff.fullName))
    ).map((fullName) => {
      return staff.find((staff) => staff.fullName === fullName);
    });

    res.json(uniqueStaff);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error retrieving staff suggestions' });
  }
}