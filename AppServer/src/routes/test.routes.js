
import express from 'express';
import {getAllAppointments} from '../controller/test/test.js'
const TestRoutes = express.Router();
// Define the route
TestRoutes.route('/check').get(getAllAppointments);

// Export the router
export default TestRoutes;
