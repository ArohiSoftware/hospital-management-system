import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt'

import prisma from '../../../db/default.js';
// Create a new Marketing record

const JWT_SECRET = process.env.JWT_SECRET || 'fdghjmnbmvnbnm';


export const createMarketing = async (req, res) => {
  try {
    const { fullName, phone, email, password, address, dateOfBirth, hospitalName } = req.body;
    console.log(req.body)
    // Validate required fields
    if (!fullName || !phone || !email || !password || !dateOfBirth || !hospitalName) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);


    let newMarketing = await prisma.marketing.create({
      data: {
        name: fullName,
        phone,
        email,
        password: hashedPassword,
        address,
        dob: dateOfBirth,
        hospital: hospitalName,
      },
    });

    console.log("newMarketing", newMarketing)

    // Generate JWT token
    const userid = newMarketing.id.toString()
    const token = jwt.sign({
      id: userid, name: newMarketing.name,
      email: newMarketing.email,
      address: newMarketing.address,
      dob: newMarketing.dob,
      phone: newMarketing.phone,
      hospital: newMarketing.hospital,
      password: newMarketing.password,
    }, JWT_SECRET, {
      expiresIn: '1h' // Token expiration time
    });


    res.status(201).json({ newMarketing, token });
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
