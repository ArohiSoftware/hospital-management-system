import express from 'express';

import { authenticateToken, getProfile, login, logout, refreshToken } from '../controller/staff/index.js';
const AuthRoutes = express.Router();

AuthRoutes.post('/login',login);
AuthRoutes.post('/logout', logout);
AuthRoutes.post('/refresh', refreshToken);
AuthRoutes.get('/profile' ,authenticateToken, getProfile)


export default AuthRoutes;



