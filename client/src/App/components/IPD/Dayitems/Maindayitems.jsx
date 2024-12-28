import React from 'react'

export default function Maindayitems() {
  return (
    <>

    <div className="flex flex-col   h-[100vh] w-full mt-16  ">
        <div className="w-full max-w-5xl mx-auto ">
            <h2 className="text-xl font-bold my-4 bg-[#D9D9D9] px-5 py-2 ">DayItems</h2>
            <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-lg font-bold text-gray-700"> ID</label>
                        <input
                            placeholder='Enter'
                            type="text"
                            name="ID"
                            className="mt-1 p-2 border rounded-lg w-full"
                        />
                    </div>
                 
                    <div>
                        <label className="block  text-lg font-bold text-gray-700">IPD Admission Id</label>
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
                        <label className="block  text-lg font-bold text-gray-700">Quantity</label>
                        <input type="text"
                            placeholder='Enter'
                            name="treatmentId"
                            className="mt-1 p-2 border rounded-lg w-full" />
                    </div>
                    <div>
                        <label className="block  text-lg font-bold text-gray-700">Cost</label>
                        <input type="text"
                            placeholder='Enter'
                            name="treatmentId"
                            className="mt-1 p-2 border rounded-lg w-full" />
                    </div>
              
                        <div className="w-full">
                            <label className="block  text-lg font-bold text-gray-700 ">Created At</label>
                            <select className="mt-1 p-2 border rounded-lg w-full">
                                <option>Select</option>
                            </select>
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
