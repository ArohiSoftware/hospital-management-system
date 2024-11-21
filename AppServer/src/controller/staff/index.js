import { createStaff } from "./create/create.staff.js";
import { deleteStaff } from "./delete/delete.staff.js";
import { updateStaff } from "./update/update.staff.js";
import { getAllStaff,getStaffById ,getStaffByName} from "./GET/get.staff.js";
import { login } from "./auth/Login.js";
import { logout } from "./auth/Logout.js";
import { refreshToken } from "./auth/refreshToken.js";
import { getProfile } from "./auth/getprofile.js";
import { authenticateToken } from "../../middleware/verify.js";

export {createStaff,deleteStaff,getAllStaff,getStaffById,updateStaff,login,logout,refreshToken,getStaffByName ,getProfile , authenticateToken};