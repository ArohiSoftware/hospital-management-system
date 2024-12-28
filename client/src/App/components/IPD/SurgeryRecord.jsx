import React from 'react'

export default function SurgeryRecord() {
  return (
    <>
   
    <div className="flex flex-col   h-[100vh] w-full mt-16  ">
       <div className="w-full max-w-5xl mx-auto ">
         <h2 className="text-xl font-bold my-4 bg-[#D9D9D9] px-4 py-2 ">Surgery Records</h2>
         <form className="space-y-4">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <div>
               <label className="block text-lg font-bold text-gray-700">Patient ID</label>
               <input
                placeholder='Enter'
                 type="text"
                 name="ID"
                 className="mt-1 p-2 border rounded-lg w-full"
               />
             </div>
             <div>
               <label className="block text-lg font-bold text-gray-700">Surgery ID</label>
               <input
               placeholder='Enter'
                 type="text"
                 name="treatmentId"
                 className="mt-1 p-2 border rounded-lg w-full"
               />
             </div>
             <div>
               <label className="block  text-lg font-bold text-gray-700"> Admission ID</label>
               <input
                             placeholder='Enter'
 
                 type="text"
                 name="admissionId"
                 className="mt-1 p-2 border rounded-lg w-full"
               />
             </div>
             <div>
               <label className="block  text-lg font-bold text-gray-700">Treatment ID</label>
               <input
               placeholder='Enter'
                 type="text"
                 name="dayItemId"
                 className="mt-1 p-2 border rounded-lg w-full"
               />
             </div>
            
            
             <div>
               <label className="block  text-lg font-bold text-gray-700">Doctor ID</label>
              <input   type="text"
              placeholder='Enter'
                 name="treatmentId"
                 className="mt-1 p-2 border rounded-lg w-full"/>
             </div>
             <div>
               <label className="block  text-lg font-bold text-gray-700">Surgery Type</label>
               <select
                 name="roomNo"
                 className="mt-1 p-2 border rounded-lg w-full"
               >
                 <option value="">Select</option>
                 <option value="1">1</option>
                 <option value="2">2</option>
                 <option value="3">3</option>
                 <option value="4">4</option>
               </select>
             </div>
             <div className="w-full">
                 <label className="block  text-lg font-bold  text-gray-700">Surgery Date</label>
                 <input
                   type="date"
                   name="createdAt"
                   className="mt-1 p-2 border rounded-lg w-full"
                 />
               </div>
               <div className="flex space-x-4">
               
               <div className="w-1/2">
                 <label className="block  text-lg font-bold text-gray-700 ">Start Time</label>
                 <input
                 type="date"
                   className="mt-1 p-2 border rounded-lg w-full"
                 />
               </div>
               <div className="w-1/2">
                 <label className="block  text-lg font-bold text-gray-700">End Time</label>
                 <input
                 type="date"
                   className="mt-1 p-2 border rounded-lg w-full"
                 />
                     
               </div>
             </div>
             <div className="flex space-x-4">
               
               <div className="w-1/2">
                 <label className="block  text-lg font-bold text-gray-700 ">Operation Room</label>
                 <select
                   className="mt-1 p-2 border rounded-lg w-full"
                 >
                     <option>Select</option>
                 </select>
               </div>
               <div className="w-1/2">
                 <label className="block  text-lg font-bold text-gray-700">Team Members</label>
                 <select
                 type="date"
                   className="mt-1 p-2 border rounded-lg w-full"
                 >
                     <option>Select</option>
                 </select>
               </div>
             </div>
             <div>
               <label className="block  text-lg font-bold text-gray-700">Anesthesia type</label>
               <select
                 name="roomNo"
                 
                 className="mt-1 p-2 border rounded-lg w-full"
               >
                 <option value="">Select</option>
                 <option value="1">1</option>
                 <option value="2">2</option>
                 <option value="3">3</option>
                 <option value="4">4</option>
               </select>
             </div>
             <div>
               <label className="block  text-lg font-bold text-gray-700">Preop Diagnosis</label>
              <input   type="text"
              placeholder='Enter'
                 name="treatmentId"
                 className="mt-1 p-2 border rounded-lg w-full"/>
             </div>
             <div>
               <label className="block  text-lg font-bold text-gray-700">Postop Diagnosis</label>
              <input   type="text"
              placeholder='Enter'
                 name="treatmentId"
                 className="mt-1 p-2 border rounded-lg w-full"/>
             </div>
            
           </div>
           <div>
               <label className="block  text-lg font-bold text-gray-700">Procedural Discription</label>
              <textarea className='mt-1 p-2 border rounded-lg w-full h-20 ' 
              placeholder='Enter'
              type="text"></textarea>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
             <div>
               <label className="block  text-lg font-bold text-gray-700">Surgery Outcome</label>
               <select
                 name="roomNo"
                 
                 className="mt-1 p-2 border rounded-lg w-full"
               >
                 <option value="">Select</option>
                 <option value="1">1</option>
                 <option value="2">2</option>
                 <option value="3">3</option>
                 <option value="4">4</option>
               </select>
             </div>
             <div>
               <label className="block  text-lg font-bold text-gray-700">Complications</label>
              <input   type="text"
              placeholder='Enter'
                 name="treatmentId"
                 className="mt-1 p-2 border rounded-lg w-full"/>
             </div>
             <div>
               <label className="block  text-lg font-bold text-gray-700">Mediacation Id</label>
              <input   type="text"
              placeholder='Enter'
                 name="treatmentId"
                 className="mt-1 p-2 border rounded-lg w-full"/>
             </div>
             <div>
               <label className="block  text-lg font-bold text-gray-700">Mediacation Administered</label>
              <input   type="text"
              placeholder='Enter'
                 name="treatmentId"
                 className="mt-1 p-2 border rounded-lg w-full"/>
             </div>
             <div>
               <label className="block  text-lg font-bold text-gray-700">Blood Loss</label>
              <input   type="text"
              placeholder='Enter'
                 name="treatmentId"
                 className="mt-1 p-2 border rounded-lg w-full"/>
             </div>
             <div>
               <label className="block  text-lg font-bold text-gray-700">Implants used</label>
              <input   type="text"
              placeholder='Enter'
                 name="treatmentId"
                 className="mt-1 p-2 border rounded-lg w-full"/>
             </div>
             </div>
             <div>
               <label className="block  text-lg font-bold text-gray-700">Recovery Notes</label>
              <textarea className='mt-1 p-2 border rounded-lg w-full h-20 ' 
              placeholder='Enter'
              type="text"></textarea>
             </div>
             <div className="flex space-x-4 w-1/2">
              <div className="w-full">
                <label className="block  text-lg font-bold  text-gray-700">Created At</label>
                <input
                  type="date"
                  name="createdAt"
                  className="mt-1 p-2 border rounded-lg w-full"
                />
              </div>
              <div className="w-full">
                <label className="block  text-lg font-bold text-gray-700">Updated At</label>
                <input
                  type="date"
                  name="updatedAt"
                  className="mt-1 p-2 border rounded-lg w-full"
                />
              </div>
            </div>
           <div className="text-right my-4">
             <button
               type="submit"
               className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-9 rounded"
             >
               Next
             </button>
           </div>
         </form>
       </div>
     </div>
    
     </>
  )
}
