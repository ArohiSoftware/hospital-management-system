import jwt from 'jsonwebtoken';
import Cookies from 'js-cookie';

export async function authenticateToken  (req, res, next) {

    console.log("authenticateToken", req.headers, req.cookies);

    let token = req.cookies.accessToken;

    if (!token) {
        token = req.headers["authorization"]?.split(" ")[1]; 
    }
    if (!token) {
        return res.status(401).json({ error: "No access token provided" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(403).json({ error: "Invalid access token" });
    }
};

export async function checkAdmin(req, res, next) {
    const token = req.user;

    if (!token) {
        return res.status(401).json({ message: 'Access token is missing', status: false });
    }

    try {
        const user = token;

        if (!user) {
            return res.status(401).json({ message: 'Unauthorized', status: false });
        }

        if (user.role !== 'SuperAdmin' || user.role !== 'Admin') {
            return res.status(403).json({ message: 'Forbidden: Admin access required', status: false });
        }

        req.user = user; // Assign user to req.user
        next();
    } catch (error) {
        console.error('Error in verifyAdmin middleware:', error);
        return res.status(500).json({ message: 'Internal server error', status: false, error: error.message });
    }
}
