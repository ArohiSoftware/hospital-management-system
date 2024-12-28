import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import axiosInstanceApp from '../../axiosConfig';
import { FaUserCheck, FaUserEdit } from 'react-icons/fa';
import { getprofile , updateProfile} from '../../redux/actions/StaffProfileAction';

const inputClasses = "border border-gray-300 font-bold text-gray-500 rounded-lg p-2";
const buttonClasses = "text-primary hover:underline hover:text-blue-600";
const labelClasses = "block text-muted-foreground mb-2";
const flexClasses = "flex justify-between items-center mb-6";
const radioClasses = "flex items-center";

const Showprofile = () => {
  const navigate = useNavigate()

  const dispatch = useDispatch();
  const userdata = useSelector((state) => state.profile);
const user =userdata.userprofile;
  console.log("userdata" , userdata)

  useEffect(() => {
    console.log("get profile called ")
    dispatch(getprofile());
  }, [dispatch]);

  // console.log("currentUser", user)

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    department: '',
  });

  const [loading, setLoading] = useState(true);


  useEffect(() => {
    if (user) {
      setFormData({
        id:user.id|| '',
        firstName: user.fullName || '',
        lastName: user.specialization || '',
        email: user.email || '',
        mobile: user.contact_number || '',
        department: user.department || '',
      });
      setLoading(false);  // Set loading to false once data is fetched
    }
  }, [user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    const token = localStorage.getItem('authToken');
    const userId = user.id;

    const onSuccess = (updatedProfile) => {
      toast.success('Profile updated successfully!');
      setIsEditing(false);
      setFormData(updatedProfile); // Update form data after successful save
    };

    dispatch(updateProfile(formData, onSuccess)); // Dispatch the updateProfile action
  };


  const toggleEdit = () => setIsEditing((prev) => !prev);

  

  const handleDeleteAccount = async () => {
    const confirmDelete = window.confirm('Are you sure you want to delete your account? This action cannot be undone.');
    try {
      if (confirmDelete) {
        const response = await axiosInstanceApp.delete(`staff/delete/${user._id}`)

        toast.success('Account deleted successfully!');
        console.log("user delted", response)
        localStorage.removeItem('authToken');
        navigate("/")
        window.location.reload()
      }
    } catch (e) {
      console.log(e)
      toast.error('Failed to delete account!');
    };
  }
  if (loading) {
    return <div>Loading...</div>;
  }


  return (
    <div className="max-w-5xl mx-auto p-8 bg-white text-card-foreground rounded-lg shadow-md">
      <div className={flexClasses}>
        <h2 className="text-xl font-semibold">Profile Information</h2>
        <button className={buttonClasses} onClick={isEditing ? handleSave : toggleEdit}>
          {isEditing ? <FaUserCheck className='text-green-500 text-xl' /> : <FaUserEdit className='text-orange-500 text-xl' />}
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
          className={inputClasses}
          readOnly={!isEditing}
        />
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
          className={inputClasses}
          readOnly={!isEditing}
        />
      </div>
      <input
        type="text"
        name="department"
        value={formData.department}
        onChange={handleInputChange}
        className={`${inputClasses} w-1/2 mb-6`}
        readOnly={!isEditing}
      />
      
      <div className={flexClasses}>
        <h2 className="text-xl font-semibold">Email Address</h2>
      </div>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        className={`${inputClasses} w-full mb-6`}
        readOnly={!isEditing}
      />
      <div className={flexClasses}>
        <h2 className="text-xl font-semibold">Mobile Number</h2>
      </div>
      <input
        type="tel"
        name="mobile"
        value={formData.mobile}
        onChange={handleInputChange}
        className={`${inputClasses} w-full mb-6`}
        readOnly={!isEditing}
      />
    
   
      <div className="mt-8 flex space-x-4">
        <button className={buttonClasses} onClick={() => toast.info('Account deactivated!')}>Deactivate Account</button>
        <button
          className="text-destructive text-white font-bold bg-red-500 px-3 py-1 rounded-md hover:text-black"
          onClick={handleDeleteAccount}
        >
          Delete Account
        </button>
      </div>
     
    </div>
  );
};

export default Showprofile;