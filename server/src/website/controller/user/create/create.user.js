import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

// Secret key for signing the JWT token (you should store this in an environment variable)
const JWT_SECRET = process.env.JWT_SECRET || 'xftyuikmnbvfdrfguh';

export const createUser = async (req, res) => {
    try {
        const { name, username, email, password, phoneNumber, role } = req.body;

        // Validate input fields
        if (!name || !username || !email || !password || !phoneNumber) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Check if a user already exists with the same username, email, or phoneNumber
        const existingUser = await prisma.user.findFirst({
            where: {
                OR: [
                    { username: username },
                    { email: email },
                    { phoneNumber: BigInt(phoneNumber) } // Ensure phoneNumber is BigInt for comparison
                ]
            }
        });

        if (existingUser) {
            return res.status(400).json({ message: "User with the same username, email, or phone number already exists" });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const user = await prisma.user.create({
            data: {
                name,
                username,
                email,
                password: hashedPassword, // Save the hashed password
                phoneNumber: BigInt(phoneNumber), // Store phoneNumber as BigInt
                role: role || 'admin' // Default to 'admin' if role is not provided
            }
        });

        // Generate JWT Token
        const token = jwt.sign(
            { id: user.id.toString(), username: user.username, role: user.role },
            JWT_SECRET,
            { expiresIn: '1h' } // Token expiration time
        );

        // Return the created user and JWT token (convert BigInt to string in response)
        res.status(201).json({
            token, // Return the JWT token
            user: {
                id: user.id.toString(), // Convert BigInt to string
                name: user.name,
                username: user.username,
                email: user.email,
                phoneNumber: user.phoneNumber.toString(), // Convert BigInt to string
                role: user.role,
                createdAt: user.createdAt
            }
        });
    } catch (error) {
        // Handle Prisma and server errors
        if (error.code === 'P2002') {
            res.status(400).json({ message: 'Email, username, or phone number already exists' });
        } else {
            res.status(500).json({ message: error.message });
        }
    }
};
