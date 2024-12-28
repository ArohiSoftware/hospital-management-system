import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

import bcrypt from 'bcrypt';

const SALT_ROUNDS = 10; // Number of salt rounds for hashing
const SECRET_KEY = 'your_secret_key'; // Replace this with your actual secret key
export const updateStaff = async (req, res) => {
    const { id } = req.params;
    console.log('Request params:', req.params);

console.log("staffid",id)
    // Ensure the ID is valid (e.g., a number)
    if (!id || isNaN(parseInt(id))) {
        return res.status(400).json({ error: 'Invalid staff ID' });
    }

    const { fullName, specialization, user, password, type, contact_number, email, qualifications, department  , role} = req.body;

    console.log('Request body:', req.body);
    try {
        // Combine the password with the secret key
        const passwordWithKey = `${password}${SECRET_KEY}`;

        // Hash the combined password
        const hashedPassword = await bcrypt.hash(passwordWithKey, SALT_ROUNDS);

        const updatedStaff = await prisma.staff.update({
            where: { id: parseInt(id) },
            data: {
                fullName,
                specialization,
                user,
                password: hashedPassword, // Save the hashed password
                type,
                contact_number,
                email,
                qualifications,
                department,
                role,
                updated_at: new Date(), // Update the timestamp
            },
        });

        return res.json(updatedStaff);
    } catch (error) {
        console.error('Error updating staff:', error.message);
        return res.status(500).json({ error: 'Error updating staff' });
    }
};
