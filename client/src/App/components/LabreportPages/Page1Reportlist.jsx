import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { MedicationContext } from './MainReport';
import Care from '../IMAGE/hugeicons_treatment.png';

export default function MedicationList() {
  const { medications } = useContext(MedicationContext);

  // Get the 3 most recent medications
  const recentMedications = medications.slice(-3).reverse();

  return (
    <div className="h-[70vh] w-[70vw] flex mx-auto pl-10"> {/* 90% of window height and width */}
      {/* Left blank div taking 20% */}
      {/* <div className="w-1/5 bg-gray-100"></div> */}

      {/* Content section taking 80% */}
      <div className="w-4/5 pl-10">
        <div className="bg-gray-200 rounded-md flex justify-between items-center max-w-full p-5 ">
          <h1 className="text-xl font-bold px-3">Main Lab Report</h1>
          <Link to="/new-medication" className="bg-green-500 text-white px-4 py-2 rounded-2xl">
            Add new file +
          </Link>
        </div>

        <div className="flex justify-center max-w-full mx-auto">
          <img src={Care} alt="Care" className="w-10 h-10 cursor-pointer mt-6" />
          <h2 className="text-3xl text-black mb-1 font-bold mt-5 pl-5">Reports</h2>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md max-w-full mx-auto">
          <div className="flex justify-between items-center mb-6"></div>
          
          {/* Search Section */}
          <div className="mb-4 flex justify-center space-x-2">
            <input
              type="text"
              placeholder="Search Patient Name or ID"
              className="w-2/5 p-2 border rounded-xl"
            />
            <button className="bg-green-500 text-white px-4 py-2 rounded-xl">View</button>
          </div>

          {/* Medication List */}
          {medications.map((medication, index) => (
            <div key={index} className="flex justify-between items-center bg-gray-100 p-4 rounded-md mb-2">
              <span>{medication.id} - {medication.patientMedicationId}</span>
              <Link to={`/edit-medication/${medication.id}`} className="bg-green-500 text-white px-4 py-2 rounded-2xl">
                Edit
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
