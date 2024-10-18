import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || 'xftyuikmnbvfdrfguh';

//register
export const createUser = async (req, res) => {
    try {
        const { name, username, email, password, phoneNumber, role } = req.body;

        if (!name || !username || !email || !password || !phoneNumber) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const existingUser = await prisma.user.findFirst({
            where: {
                OR: [
                    { username: username },
                    { email: email },
                    { phoneNumber: BigInt(phoneNumber) } 
                ]
            }
        });

        if (existingUser) {
            return res.status(400).json({ message: "User with the same username, email, or phone number already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const user = await prisma.user.create({
            data: {
                name,
                username,
                email,
                password: hashedPassword, 
                phoneNumber: BigInt(phoneNumber),
                role: role || 'admin' 
            }
        });

        // Generate JWT token
        const userid = user.id.toString()
        const token = jwt.sign({ id: userid, username: user.username, role: user.role },  JWT_SECRET,{
                 expiresIn: '1h' // Token expiration time
                });

//converting bigint into string
        const responseUser  = {
            ...user,
            id: user.id.toString(),phoneNumber:user.phoneNumber.toString() 
        };

        return res.status(201).json({
            token:token,
            data:responseUser
        });

    } catch (error) {
        if (error.code === 'P2002') {
            res.status(400).json({ message: 'Email, username, or phone number already exists' });
        } else {
            res.status(500).json({ message: error.message });
        }
    }
};


//Login

export const loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;

      
        if (!username || !password) {
            return res.status(400).json({ message: "Username and password are required" });
        }

       
        const user = await prisma.user.findFirst({
            where: { username },
        });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

       
        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
            return res.status(401).json({ message: "Invalid password" });
        }

        //generate token
        const token = jwt.sign(
            { id: user.id.toString(), username: user.username, role: user.role }, // Convert id to string
            JWT_SECRET,
            { expiresIn: '1h' }
        );

      
 // Convert bigint to string
        const responseUser  = {
            ...user,
            id: user.id.toString(),phoneNumber:user.phoneNumber.toString() 
        };

        console.log(responseUser);

        res.status(200).json({
           token: token,
           data: responseUser
            
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};