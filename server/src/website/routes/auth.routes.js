// import { login } from '../controller/auth.controller.js'; // Add .js extension for local file import
import express from 'express';
import { createUser } from '../controller/user/create/create.user.js';

const AuthRoutes = express.Router();

// Define the route
AuthRoutes.post('/register',createUser);

// Export the router
export default AuthRoutes;
