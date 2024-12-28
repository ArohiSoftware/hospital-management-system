import jwt from 'jsonwebtoken';

const generateAccessToken = (user) => {
    return jwt.sign({
        id: user.id,
        fullName: user.fullName,
        email: user.email,
        role: user.role,
    }, process.env.JWT_SECRET, { expiresIn: '7h' });
};

const generateRefreshToken = (user) => {
    return jwt.sign({
        id: user.id,
        fullName: user.fullName,
        email: user.email,
        role: user.role,
    }, process.env.JWT_SECRET, { expiresIn: '7d' });
};

const setTokens = (user, res) => {
    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);
    res.cookie('accessToken', accessToken, {
        
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        //  maxAge : 1000, // 7 hours in milliseconds
         maxAge : 15 * 60 * 1000, // 7 hours in milliseconds
        // 15 minutes
    });

    res.cookie('refreshToken', refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    return { accessToken, refreshToken };
};

export {
    generateAccessToken,
    generateRefreshToken,
    setTokens,
};
