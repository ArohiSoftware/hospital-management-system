import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerPatient } from '../../redux/actions/patientActions'; // Adjust the path
import { Upload } from 'lucide-react';

const PatientRegistrationForm = () => {
  const [formData, setFormData] = useState({
    patientName: '',
    age: '',
    address: '',
    state: '',
    district: '',
    pinCode: '',
    mobileNo: '',
    gender: '',
    blood_group:'',
    email: '',
    // alternateMobileNo: '',
    // identityType: '',
    // identityNumber: '',
    // emergencyName: '',
    // emergencyMobile: '',
    // emergencyRelation: '',
    // emergencyAlternateMobile: '',
    // emergencyAddress: '',
    // insuranceIssuer: '',
    // insuranceNumber: '',
    // insuranceEndDate: '',
    // insuranceMaturityAmount: '',

  });

  const [file, setFile] = useState(null);
  const dispatch = useDispatch(); // Use dispatch from redux

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Dispatch the action with form data and a callback
    dispatch(registerPatient(formData, (data) => {
      // Show alert and log response data
      alert('Form submitted successfully!');
      console.log('Patient data:', data);
  
      // Reset form data if needed
      setFormData({
        patientName: '',
        age: '',
        address: '',
        state: '',
        district: '',
        pinCode: '',
        mobileNo: '',
        gender: '',
        blood_group:'',
        email: '',
        // alternateMobileNo: '',
        // identityType: '',
        // identityNumber: '',
        // emergencyName: '',
        // emergencyMobile: '',
        // emergencyRelation: '',
        // emergencyAlternateMobile: '',
        // emergencyAddress: '',
        // insuranceIssuer: '',
        // insuranceNumber: '',
        // insuranceEndDate: '',
        // insuranceMaturityAmount: '',
    
      });
    }));
  };
  
  return (

          <div className="flex-1 overflow-y-50 px-20 mt-10 rounded-lg m-4">
            <h1 className="text-2xl font-bold text-center mb-6 dark:text-white">Patient Registration</h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="patientName" className="block mb-1 text-sm font-medium dark:text-gray-100">Patient Name</label>
                    <input
                      type="text"
                      id="patientName"
                      name="patientName"
                      value={formData.patientName}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded bg-white dark:bg-gray-100 dark:bg-opacity-10 dark:text-white dark:border-gray-500"
                      placeholder="Enter Patient name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="age" className="block mb-1 text-sm font-medium dark:text-gray-100">Age</label>
                    <input
                      type="text"
                      id="age"
                      name="age"
                      value={formData.age}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded bg-white dark:bg-gray-100 dark:bg-opacity-10 dark:text-white dark:border-gray-500"
                      placeholder="Enter Patient's age"
                      required
                    />
                  </div>
                  <div className="col-span-2">
                    <label htmlFor="address" className="block mb-1 text-sm font-medium dark:text-gray-100">Address</label>
                    <textarea
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded bg-white dark:bg-gray-100 dark:bg-opacity-10 dark:text-white dark:border-gray-500"
                      placeholder="Enter Patient's address"
                      rows={3}
                      required
                    ></textarea>
                  </div>
                </div>
                <div className='grid grid-cols-3 gap-3 mt-4'>
                  <div>
                    <label htmlFor="state" className="block mb-1 text-sm font-medium dark:text-gray-100">State</label>
                    <select
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded bg-white dark:bg-gray-700 dark:text-white dark:border-gray-500 dark:hover:bg-gray-700"
                      required
                    >
                      <option value="">Select State</option>
                      <option value="state1">State 1</option>
                      <option value="state2">State 2</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="district" className="block mb-1 text-sm font-medium dark:text-gray-100">District</label>
                    <select
                      id="district"
                      name="district"
                      value={formData.district}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded bg-white dark:bg-gray-700 dark:text-white dark:border-gray-500 dark:hover:bg-gray-700"
                      required
                    >
                      <option value="">Select District</option>
                      <option value="district1">District 1</option>
                      <option value="district2">District 2</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="pinCode" className="block mb-1 text-sm font-medium dark:text-gray-100">Pin code</label>
                    <input
                      type="text"
                      id="pinCode"
                      name="pinCode"
                      value={formData.pinCode}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded bg-white dark:bg-gray-100 dark:bg-opacity-10 dark:text-white dark:border-gray-500"
                      placeholder="Enter pin code"
                      required
                    />
                  </div>
                </div>
                <div className='grid grid-cols-2 gap-4 mt-4'>
                  <div>
                    <label htmlFor="mobileNo" className="block mb-1 text-sm font-medium dark:text-gray-100">Mobile no</label>
                    <input
                      type="tel"
                      id="mobileNo"
                      name="mobileNo"
                      value={formData.mobileNo}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded bg-white dark:bg-gray-100 dark:bg-opacity-10 dark:text-white dark:border-gray-500"
                      placeholder="Enter mobile no"
                      required
                    />
                  </div>
                  {/* <div>
                    <label htmlFor="alternateMobileNo" className="block mb-1 text-sm font-medium dark:text-gray-100">Alternate mobile no</label>
                    <input
                      type="tel"
                      id="alternateMobileNo"
                      name="alternateMobileNo"
                      value={formData.alternateMobileNo}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded bg-white dark:bg-gray-100 dark:bg-opacity-10 dark:text-white dark:border-gray-500"
                      placeholder="Enter alternate mobile no"
                    />
                  </div> */}
                  <div>
                    <label htmlFor="gender" className="block mb-1 text-sm font-medium dark:text-gray-100">Select gender type</label>
                    <select
                      id="gender"
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded bg-white dark:bg-gray-700 dark:text-white dark:border-gray-500 dark:hover:bg-gray-700"
                      required
                    >
                      <option value="">Select gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-1 text-sm font-medium dark:text-gray-100">Enter email number</label>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded bg-white dark:bg-gray-100 dark:bg-opacity-10 dark:text-white dark:border-gray-500"
                      placeholder="Enter email"
                    />
                  </div>
                  <div>
                    <label htmlFor="blood_group" className="block mb-1 text-sm font-medium dark:text-gray-100">Enter blood group</label>
                    <input
                      type="text"
                      id="blood_group"
                      name="blood_group"
                      value={formData.blood_group}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded bg-white dark:bg-gray-100 dark:bg-opacity-10 dark:text-white dark:border-gray-500"
                      placeholder="Enter blood_group "
                      required
                    />
                  </div>
                </div>
                
              </div>

              {/* <div className="mb-6">
                <h2 className="text-lg font-semibold mb-4 bg-[#E4D7D7] p-2">Emergency contact:</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="emergencyName" className="block mb-1 text-sm font-medium">Name</label>
                    <input
                      type="text"
                      id="emergencyName"
                      name="emergencyName"
                      value={formData.emergencyName}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded"
                      placeholder="Enter full name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="emergencyMobile" className="block mb-1 text-sm font-medium">Mobile no</label>
                    <input
                      type="tel"
                      id="emergencyMobile"
                      name="emergencyMobile"
                      value={formData.emergencyMobile}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded"
                      placeholder="Enter Mobile no"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="emergencyRelation" className="block mb-1 text-sm font-medium">Relation</label>
                    <input
                      type="text"
                      id="emergencyRelation"
                      name="emergencyRelation"
                      value={formData.emergencyRelation}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded"
                      placeholder="Enter relation with patient"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="emergencyAlternateMobile" className="block mb-1 text-sm font-medium">Alternate mobile number</label>
                    <input
                      type="tel"
                      id="emergencyAlternateMobile"
                      name="emergencyAlternateMobile"
                      value={formData.emergencyAlternateMobile}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded"
                      placeholder="Enter alternate mobile number"
                    />
                  </div>
                  <div className="col-span-2">
                    <label htmlFor="emergencyAddress" className="block mb-1 text-sm font-medium">Address</label>
                    <textarea
                      id="emergencyAddress"
                      name="emergencyAddress"
                      value={formData.emergencyAddress}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded"
                      placeholder="Enter full address"
                      rows={3}
                      required
                    ></textarea>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h2 className="text-lg font-semibold mb-4 bg-[#E4D7D7] p-2">Insurance details (if applicable)</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="insuranceIssuer" className="block mb-1 text-sm font-medium">Insurance issuer/ company name</label>
                    <input
                      type="text"
                      id="insuranceIssuer"
                      name="insuranceIssuer"
                      value={formData.insuranceIssuer}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded"
                      placeholder="Enter company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="insuranceNumber" className="block mb-1 text-sm font-medium">Enter Insurance number/Policy number</label>
                    <input
                      type="text"
                      id="insuranceNumber"
                      name="insuranceNumber"
                      value={formData.insuranceNumber}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded"
                      placeholder="Enter policy number"
                    />
                  </div>
                  <div>
                    <label htmlFor="insuranceEndDate" className="block mb-1 text-sm font-medium">End date</label>
                    <input
                      type="date"
                      id="insuranceEndDate"
                      name="insuranceEndDate"
                      value={formData.insuranceEndDate}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  <div>
                    <label htmlFor="insuranceMaturityAmount" className="block mb-1 text-sm font-medium">Enter maturity amount</label>
                    <input
                      type="text"
                      id="insuranceMaturityAmount"
                      name="insuranceMaturityAmount"
                      value={formData.insuranceMaturityAmount}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded"
                      placeholder="Enter full maturity amount"
                    />
                  </div>
                </div>
              </div>

              <div className="mb-6 ">
                <h2 className="text-lg font-semibold mb-4">Upload consent form</h2>
                <div className="border-2 border-dashed border-gray-300 bg-white rounded-lg p-4 py-14 text-center w-3/4 m-auto ">
                  <input
                    type="file"
                    id="consentForm"
                    onChange={handleFileChange}
                    className="hidden"
                    accept=".jpg,.png,.pdf,.xlsx"
                  />
                  <label htmlFor="consentForm" className="cursor-pointer">
                    <Upload className="mx-auto mb-2" size={24} />
                    <p>Choose a file or drag & drop it here</p>
                    <p className="text-sm text-gray-500">JPEG, PNG, PDF, and Excel formats, up to 50MB</p>
                  </label>
                  {file && <p className="mt-2 text-sm text-gray-600">Selected file: {file.name}</p>}

                </div>
              </div> */}

              <div className="text-center">
                <button 
                  type="submit" 
                  className="bg-green-500 shadow-lg shadow-green-500/50 text-white px-6 py-2 rounded-md hover:bg-green-600 transition-colors"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
  )
}
export default PatientRegistrationForm