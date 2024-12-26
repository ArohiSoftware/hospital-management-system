import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();
const SALT_ROUNDS = 10; // Number of salt rounds for hashing

// Password regex pattern:
// - Minimum 8 characters
// - At least one uppercase letter
// - At least one lowercase letter
// - At least one number
// - At least one special character (#, @, $, etc.)
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#@!$%^&*])[A-Za-z\d#@!$%^&*]{8,}$/;

// Create a new Staff member
export const createStaff = async (req, res) => {
  const {
    fullName,
    specialization,
    user,
    password,
    type,
    contact_number,
    email,
    qualifications,
    department,
    role,
  } = req.body;

  try {
    // Validate the password against the regex
    if (!PASSWORD_REGEX.test(password)) {
      return res.status(400).json({
        msg: "Password must be at least 8 characters long, include one uppercase letter, one lowercase letter, one number, and one special character (#, @, $, etc.).",
      });
    }

    // Check if email already exists
    const checkEmail = await prisma.staff.findFirst({
      where: { email },
    });

    if (checkEmail) {
      return res.status(400).json({ msg: "Email already exists" });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(SALT_ROUNDS);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create the new staff member
    const newStaff = await prisma.staff.create({
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
      },
    });

    console.log(newStaff);
    return res.status(201).json({
      msg: "success",
      data: newStaff,
    });
  } catch (error) {
    console.error("Error creating staff:", error.message);
    return res.status(500).json({
      error: `Error creating staff: ${error.message}`,
    });
  }
};

