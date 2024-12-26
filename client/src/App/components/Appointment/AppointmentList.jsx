//Medication First Page Code

export default function AppointmentList() {
  

  return (
    <div>
      <div className=" text-lg my-3 bg-[#E4D7D7] text-gray-600 font-bold py-1 px-2">
      <h1 className="text-xl font-bold px-3 ">AppointmentList</h1>

     </div>
     <div className="  flex justify-center max-w-screen-2xl mx-auto">
    <h2 className="text-2xl text-black font-bold mt-5 font-bold text-center mb-6 dark:text-white">Appointment Reports</h2>
   </div>
    <div className="bg-white opacity-70 p-6 rounded-lg shadow-md max-w-screen-2xl mx-auto dark:bg-[#515765]">
      <div className="flex justify-between items-center mb-6">
        
        
      </div>
      <div className="mb-4 flex justify-center  space-x-2">
     <input
      type="text"
      placeholder="Search Patien
      t Name or D"
      className="w-2/5 p-2 border rounded-xl dark:text-white dark:bg-gray-800"
     />
     <button className="bg-green-500 text-white px-4 py-2 rounded-xl hover:bg-green-600 transition-colors">View</button>
    </div>
      
    </div>
    </div>
  );
}