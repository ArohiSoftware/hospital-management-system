import prisma from "../../../db/default.js";

import bcrypt from 'bcrypt'
// Create a new Marketing record
export const createMarketing = async (req, res) => {
  try {
    const { name, phone, email, password, address, dob, hospital } = req.body;

    // Validate required fields
    if (!name || !phone || !password || !address || !dob || !hospital) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    let newMarketing = await  prisma.marketing.create({
      data: {
        name,
        phone,
        email,
        password: hashedPassword,
        address,
        dob: new Date(dob),
        hospital,
      },
    });
newMarketing.id = newMarketing.id.toString(
  
);
    res.status(201).json(newMarketing);
  } catch (error) {
    console.error(error);
    if (error.code === 'P2002') {
      // Unique constraint failed
      res.status(409).json({ error: `Unique constraint failed on the field: ${error.meta?.target}` });
    } else {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};
