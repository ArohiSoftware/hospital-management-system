import React from 'react';

const OpdGetReport = () => {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Header Note */}
      <div className="mb-8">
        <label className=" text-lg ml-3 font-bold " >Header Note</label>
        <input
          type="text"
          
          className="w-full px-10 h-12 ml-1 border border-gray-300 rounded placeholder-gray-400"
        />
      </div>

      {/* Finding Category Section */}
      <div className="grid grid-cols-3 gap-8 mb-4 ml-3 mr-3 ">
        <div>
          <label className="block mb-2 text-gray-600 font-bold text-sm ">Finding Category</label>
          <select className="w-full p-2 border border-gray-300 rounded-xl text-gray-400 ">
            <option>Select</option>
          </select>
        </div>
        <div>
          <label className="block mb-2 text-gray-600 font-bold text-sm ">Finding List</label>
          <input 
           type="text"
            className="w-full p-4 border border-gray-300  placeholder-gray-400 rounded-xl  h-10"
          />

        </div>
        <div>
          <label className="block mb-2 text-gray-600 rounded-xl font-bold text-sm">Finding Description</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300  placeholder-gray-400 rounded-xl  h-10"
          />
        </div>
      </div>

      {/* Finding Print Checkbox */}
      <div className="flex items-center mb-4 mx-5">
        <input type="checkbox" className="mr-2" />
        <label className="text-gray-600  font-bold text-sm">Finding Print</label>
      </div>

      {/* Medicine Section */}
      <div className="grid grid-cols-3  gap-8  ml-3 mr-3">
        <div>
          <label className="block mb-2 text-gray-600 font-bold text-sm ">Medicine Category</label>
          <select className="w-full p-2 border border-gray-300 rounded-xl  text-gray-400">
            <option>Select</option>
          </select>
        </div>
        <div>
          <label className="block mb-2 text-gray-600 gap-8  ml-2 mr-3 font-bold text-sm ">Medicine</label>
          <select className="w-full p-2 border border-gray-300 rounded-xl text-gray-400 ">
            <option>Select</option>
          </select>
        </div>
        <div>
          <label className="block mb-2 text-gray-600 gap-8  ml-3 mr-3 font-bold text-sm ">Dose</label>
          <select className="w-full p-2 border border-gray-300 rounded-xl text-gray-400">
            <option>Select</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-3  mb-4 gap-8  ml-3 mr-3">
        <div>
          <label className="block mb-1 mt-2 text-gray-600 font-bold text-sm">Dose Interval</label>
          <select className="w-full p-2 border border-gray-300 rounded-xl text-gray-400">
            <option>Select</option>
          </select>
        </div>
        <div>
          <label className="block mb-1 mt-2 text-gray-600 font-bold text-sm ">Dose Duration</label>
          <select className="w-full p-2 border border-gray-300 rounded-xl text-gray-400">
            <option>Select</option>
          </select>
        </div>
        <div>
          <label className="block mb-1 mt-2 text-gray-600 font-bold text-sm">Instruction</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-xl placeholder-gray-400"
          />
        </div>
      </div>

      {/* Add Medicine Button */}
      <div className="mb-4">
      <button className="bg-green-500 flex justify-center items-center text-white p-4 h-8 rounded-xl">+ Add Medicine</button>
      </div>


      {/* Other Inputs */}
      <div className="grid grid-cols-1 gap-4 mb-4">
        <div>
          <label className="block mb-2 text-gray-600 font-bold text-sm">Attachment</label>
          <div className='flex justify-center mb-4'>
          <input
            type="file"
            className="w-full p-2 border ml-2 border-gray-300 rounded-xl "
          />
          </div>
        </div>
        <div>
          <label className="block mb-2 ml-2 text-gray-600 font-bold text-sm">Test Prescription</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-xl ml-2 mr-4 placeholder-gray-400"
          />
        </div>
        <div>
          <label className="block mb-2  ml-2 text-gray-600 font-bold text-sm">Drug History</label>
          <input
            type="text"
            className="w-full p-2 border ml-2 border-gray-300 rounded-xl placeholder-gray-400"
          />
        </div>
        <div>
          <label className="block mb-2 ml-2 text-gray-600 font-bold text-sm">PMH/PSH</label>
          <input
            type="text"
            className="w-full p-2 border ml-2 border-gray-300 rounded-xl placeholder-gray-400"
          />
        </div>
        <div>
          <label className="block mb-2  ml-2 text-gray-600 font-bold text-sm">Footer Note</label>
          <input
            type="text"
            className="w-full p-2 border ml-2 border-gray-300 rounded-xl placeholder-gray-400"
          />
        </div>
      </div>

      {/* Pathology and Footer Note */}
      <div className="grid grid-cols-3  gap-4 mb-4 ">
        <div>
          <label className="block mb-2 text-gray-600 ml-5 font-bold text-sm">Pathology</label>
          <select className="w-full p-2 border ml-2 border-gray-300 rounded-xl text-gray-400">
            <option>Select</option>
          </select>
        </div>
        <div>
          <label className="block mb-2 ml-4 text-gray-600 font-bold text-sm">Footer Note</label>
          <select className="w-full p-2 border ml-2 border-gray-300 rounded-xl text-gray-400">
            <option>Select</option>
          </select>
        </div>
      

      {/* Notification Section */}
      <div className="grid grid-cols-1 gap-4 mb-4">
        <div>
          <label className="block mb-2 text-gray-600 font-bold text-sm">Notification To</label>
          <div className="grid grid-cols-1 ml-4">
            <div>
              <input type="checkbox" /> Admin
            </div>
            <div>
              <input type="checkbox" /> Accountant
            </div>
            <div>
              <input type="checkbox" /> Docter
            </div>
            <div>
              <input type="checkbox" /> Pharmacist
            </div>
            <div>
              <input type="checkbox" /> Radiologist
            </div>
            <div>
              <input type="checkbox" /> Nurse
            </div>
            <div>
              <input type="checkbox" /> Receptionist
            </div>
          </div>
        </div>
      </div>
      </div>

      {/* Submit Button */}
      <div className="flex justify-center">
  <button className="bg-green-500 text-white p-3 rounded-xl text-fit">Create Report</button>
</div>
    </div>
  );
};

export default OpdGetReport;
