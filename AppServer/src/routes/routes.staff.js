import express from 'express';
import { createStaff, deleteStaff,getStaffById ,updateStaff,getAllStaff,getStaffByName, getUserProfile, authenticateToken} from '../controller/staff/index.js';

const staffRoutes = express.Router();
staffRoutes.route('/profile').get(authenticateToken, getUserProfile);
staffRoutes.route('/create').post(createStaff);
staffRoutes.route('/getAll').get(getAllStaff); 
staffRoutes.route('/delete/:id').delete(deleteStaff);
staffRoutes.route('/getByName').post(getStaffByName); 
staffRoutes.route('/:id').get(getStaffById);
staffRoutes.route('/update/:id').put(updateStaff);



export default staffRoutes;