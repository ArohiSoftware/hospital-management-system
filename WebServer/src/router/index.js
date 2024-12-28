import express from 'express';
import AuthRoutes from '../routes/auth.routes.js';  // Add .js extension for local file import
import advertisement from '../routes/Advertisment.js';
import { healthCheck } from '../utils/healthCheck/health.controller.js';
import marketing from '../routes/route.marketing.js';
import review from '../routes/Review.routes.js';
import setting from '../routes/Setting.routes.js';
import UserCredential from '../routes/usercredential.routes.js';
import { planroutes } from '../routes/route.subscriptionplan.js';

const AllRoutes = express();

// Define the route
AllRoutes.use('/auth', AuthRoutes);
AllRoutes.use('/advertisement',advertisement);
AllRoutes.route('/health').get(healthCheck);
AllRoutes.use('/marketing', marketing);
AllRoutes.use('/review' ,review );
AllRoutes.use('/setting' , setting);
AllRoutes.use('/userc' , UserCredential)
AllRoutes.use("/subplans",planroutes)

export default AllRoutes;
