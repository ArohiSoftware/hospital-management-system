import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Mock data to simulate backend response
const mockBackendData = {
  id: 'FLFL-81265',
  patientMedicationId: 'LGAH28PGJ',
  surgeryRecordsId: 'W34P6FYTHBUO',
  doctorId: 'lgmrman',
  startDate: '2023-10-25',
  endDate: '2023-10-25',
  treatmentType: 'type1',
  totalQuantity: '2',
  reportDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec ultricies lacinia, nisl nisl aliquam nisl, nec aliquam nisl nisl sit amet nisl.',
  cost: '549684',
  paid: '21541'
};

export default function NewMedicationForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    id: '',
    patientMedicationId: '',
    surgeryRecordsId: '',
    doctorId: '',
    startDate: '',
    endDate: '',
    treatmentType: '',
    totalQuantity: '',
    reportDescription: '',
    cost: '',
    paid: ''
  });

  // Simulate fetching data from backend
  useEffect(() => {
    // In a real application, this would be an API call
    const fetchData = async () => {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      setFormData(mockBackendData);
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate('/medication-details', { state: { formData } });
  };

  return (
    <>
      {/* <div className="bg-rose-100 h-3 flex justify-between items-center max-w-5xl mx-auto p-4">
        <h1 className="text-lg font-bold text-gray-800 border-b pb-0">New Medication</h1>
      </div> */}
      <form onSubmit={handleSubmit} className=" p-6 max-w-5xl mx-auto">
        <div className="grid grid-cols-3 gap-4">
          {/* <div className="col-span-1">
            <label htmlFor="id" className="block text-gray-700 mb-2 font-bold">
              Id
            </label>
            <input
              type="text"
              name="id"
              id="id"
              placeholder="Id"
              value={formData.id}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="col-span-1">
            <label htmlFor="patientMedicationId" className="block text-gray-700 mb-2 font-bold">
              Patient Medication Id
            </label>
            <input
              type="text"
              name="patientMedicationId"
              id="patientMedicationId"
              value={formData.patientMedicationId}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="col-span-1">
            <label htmlFor="surgeryRecordsId" className="block text-gray-700 mb-2 font-bold">
              Surgery Records Id
            </label>
            <input
              type="text"
              name="surgeryRecordsId"
              id="surgeryRecordsId"
              value={formData.surgeryRecordsId}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="col-span-1">
            <label htmlFor="doctorId" className="block text-gray-700 mb-2 font-bold">
              Doctor Id
            </label>
            <input
              type="text"
              name="doctorId"
              id="doctorId"
              value={formData.doctorId}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="col-span-1">
            <label htmlFor="startDate" className="block text-gray-700 mb-2 font-bold">
              Start Date
            </label>
            <input
              type="date"
              name="startDate"
              id="startDate"
              value={formData.startDate}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="col-span-1">
            <label htmlFor="endDate" className="block text-gray-700 mb-2 font-bold">
              End Date
            </label>
            <input
              type="date"
              name="endDate"
              id="endDate"
              value={formData.endDate}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-md w-full"
            />
          </div> */}
          <div className="col-span-3">
          <div className="bg-rose-100 h-3 flex justify-between items-center max-w-5xl mx-auto p-10 m-5">
        <h1 className="text-2xl font-bold text-gray-800 border-b pb-0">Lab Report</h1>
      </div>            
      <div className="grid grid-cols-3 gap-4">
              <div className="col-span-1">
                <label htmlFor="id" className="block text-gray-700 mb-2 font-bold">
                  Main Lab Report Id
                </label>
                <input
                  type="text"
                  name="id"
                  value={formData.id}
                  readOnly
                  className="p-3 border border-gray-300 bg-gray-200 rounded-md w-full"
                />
              </div>
              <div className="col-span-1">
                <label className="block text-gray-700 mb-2  font-bold">Patient id</label>
                <input
                  type="text"
                  name="patientId"
                  value="LOAISERFGJ"
                  readOnly
                  className="p-3 border border-gray-300 bg-gray-200 rounded-md w-full"
                />
              </div>
              <div className="col-span-1">
                <label className="block text-gray-700 mb-2 font-bold">Doctor id</label>
                <input
                  type="text"
                  name="doctorId"
                  value="W349587YTH9UO"
                  readOnly
                  className="p-3 border border-gray-300  bg-gray-200 rounded-md w-full"
                />
              </div>
              <div className="col-span-1">
                <label className="block text-gray-700 mb-2 font-bold">Cost</label>
                <input
                  type="text"
                  name="cost"
                  value="549684"
                  readOnly
                  className="p-3 border border-gray-300 bg-gray-200 rounded-md w-full"
                />
              </div>
              <div className="col-span-1">
                <label className="block text-gray-700 mb-2 font-bold">Paid</label>
                <input
                  type="text"
                  name="paid"
                  value="21541"
                  readOnly
                  className="p-3 border border-gray-300 bg-gray-200 rounded-md w-full"
                />
              </div>

              <div className="col-span-3">
              <hr className="border-black border-1" />
<br/>
                <label className="block text-gray-700 mb-2 font-bold">Test Name : Test_1</label>
                <input
                  type="text"
                  name="testResult"
                  placeholder="Enter result"
                  className="p-3 border border-gray-300 rounded-md w-full"
                />
                <br/>
                 <label className="block text-gray-700 mb-2 font-bold">Test Name : Test_2</label>
                <input
                  type="text"
                  name="testResult"
                  placeholder="Enter result"
                  className="p-3 border border-gray-300 rounded-md w-full"
                />
                <br/>

                 <label className="block text-gray-700 mb-2 font-bold">Test Name : Test_3</label>
                <input
                  type="text"
                  name="testResult"
                  placeholder="Enter result"
                  className="p-3 border border-gray-300 rounded-md w-full"
                />
              </div>
            </div>
          </div>
          
        </div>
        <div className="col-span-3 flex justify-center">
          <button type="submit" className="mt-4 bg-green-600 text-white px-6 py-3 rounded-md">
            Next
          </button>
        </div>
      </form>
    </>
  );
}
