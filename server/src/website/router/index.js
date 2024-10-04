import express from 'express';
import AuthRoutes from '../routes/auth.routes.js';  // Add .js extension for local file import
import advertisement from '../routes/Advertisment.js';
import { healthCheck } from '../utils/healthCheck/health.controller.js';

const AllRoutes = express();

// Define the route
AllRoutes.use('/auth', AuthRoutes);
AllRoutes.use('/advertisement',advertisement);
AllRoutes.route('/health').get(healthCheck);
// Export the router
export default AllRoutes;
