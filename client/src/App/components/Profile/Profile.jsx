import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createProfile } from '../../redux/actions/StaffProfileAction';
import { toast } from 'react-toastify';

const Profile = () => {
  const state = useSelector((state) => state);
  const [formData, setFormData] = useState({
    fullName: '',
    specialization: '',
    user: '',
    password: '',
    type: '',
    contact_number: '',
    email: '',
    qualifications: '',
    department: '',
    role: '',
  });

  const [passwordError, setPasswordError] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validatePassword = (password) => {
    // Regex: At least 1 uppercase, 1 lowercase, 1 number, 1 special character, and length between 8-20
    const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,20}$/;
    return pattern.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validatePassword(formData.password)) {
      console.log(formData.password);
      setPasswordError(
        'Password must be 8-20 characters long, include at least one uppercase letter, one lowercase letter, one number, and one special character.'
      );
      return;
    }

    setPasswordError('');

    dispatch(
      createProfile(formData, (data) => {
        toast(`${formData.fullName} Form submitted successfully!`);
        console.log('Staff data:', data);

        setFormData({
          fullName: '',
          specialization: '',
          user: '',
          password: '',
          type: '',
          contact_number: '',
          email: '',
          qualifications: '',
          department: '',
          role: '',
        });
      })
    );
  };

  return (
    <div className="flex-1 overflow-y-auto px-20 mt-10 rounded-lg m-4">
      <h1 className="text-2xl font-bold text-center mb-6 ">Profile Creation</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-4 bg-[#E4D7D7] p-2">
            Basic Information:
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="fullName" className="block mb-1 text-sm font-medium">Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                placeholder="Enter Full Name"
                required
              />
            </div>
            <div>
              <label htmlFor="specialization" className="block mb-1 text-sm font-medium">Specialization</label>
              <input
                type="text"
                id="specialization"
                name="specialization"
                value={formData.specialization}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                placeholder="Enter Specialization"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 text-sm font-medium">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                placeholder="Enter Email Id"
                required
              />
            </div>
            <div>
              <label htmlFor="user" className="block mb-1 text-sm font-medium">User Name</label>
              <input
                type="text"
                id="user"
                name="user"
                value={formData.user}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                placeholder="Enter username"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block mb-1 text-sm font-medium">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                placeholder="Enter password"
                required
              />
              {passwordError && (
                <p className="text-red-500 text-sm mt-1">{passwordError}</p>
              )}
            </div>
            <div>
              <label htmlFor="type" className="block mb-1 text-sm font-medium">Profession</label>
              <input
                type="text"
                id="type"
                name="type"
                value={formData.type}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                placeholder="Enter profession type (e.g., Doctor, Nurse)"
                required
              />
            </div>
            <div>
              <label htmlFor="contact_number" className="block mb-1 text-sm font-medium">Contact No</label>
              <input
                type="number"
                id="contact_number"
                name="contact_number"
                value={formData.contact_number}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                placeholder="Enter Contact No"
                required
              />
            </div>
            <div>
              <label htmlFor="qualifications" className="block mb-1 text-sm font-medium">Qualification</label>
              <input
                type="text"
                id="qualifications"
                name="qualifications"
                value={formData.qualifications}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                placeholder="Enter qualifications"
                required
              />
            </div>
            <div>
              <label htmlFor="department" className="block mb-1 text-sm font-medium">Department</label>
              <select
                id="department"
                name="department"
                value={formData.department}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              >
                <option value="">Select Department</option>
                <option value="Cardiology">Cardiology</option>
                <option value="Orthopedics">Orthopedics</option>
                <option value="Dermatology">Dermatology</option>
                <option value="Nephrology">Nephrology</option>
                <option value="Laboratory">Laboratory</option>
                <option value="General">General</option>
              </select>
            </div>
            <div>
              <label htmlFor="role" className="block mb-1 text-sm font-medium">Role</label>
              <select
                id="role"
                name="role"
                value={formData.role}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              >
                <option value="">Select Role</option>
                <option value="Admin">Admin</option>
                <option value="SuperAdmin">SuperAdmin</option>
                <option value="User">User</option>
              </select>
            </div>
          </div>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition-colors"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
