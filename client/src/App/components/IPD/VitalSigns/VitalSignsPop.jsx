import React from 'react'

export default function VitalSignsPop() {
      return (
        <div className="flex flex-col h-[100vh] w-full mt-5">
          <div className="w-full max-w-5xl mx-auto bg-white shadow-lg p-3 rounded-md">
            <h2 className="text-lg font-bold mb-4 bg-gray-200 px-4 py-2 rounded-md">
              Vital Signs
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="ml-10">
                  <label className="block mb-1 text-sm font-medium">ID</label>
                  <input
                    placeholder="Enter"
                    type="text"
                    name="id"
                    className="m-1 p-2 border rounded-lg w-full text-sm"
                  />
                </div>
                <div className="mx-10">
                  <label className="block mb-1 text-sm font-medium">Main VitalSigns ID</label>
                  <input
                    placeholder="Enter"
                    type="text"
                    name="mainVitalSignsId"
                    className="mt-1 p-2 border rounded-lg w-full text-sm"
                  />
                </div>
                <div className="ml-10">
                  <label className="block mb-1 text-sm font-medium">SPO2</label>
                  <input
                    placeholder="Enter"
                    type="text"
                    name="spo2"
                    className="mt-1 p-2 border rounded-lg w-full text-sm"
                  />
                </div>
                <div className="mx-10">
                  <label className="block mb-1 text-sm font-medium">Temperature</label>
                  <input
                    placeholder="Enter"
                    type="text"
                    name="temperature"
                    className="mt-1 p-2 border rounded-lg w-full text-sm"
                  />
                </div>
                <div className="ml-10">
                  <label className="block mb-1 text-sm font-medium">BP</label>
                  <input
                    placeholder="Enter"
                    type="text"
                    name="bp"
                    className="mt-1 p-2 border rounded-lg w-full text-sm"
                  />
                </div>
               
                <div className="mx-10">
                  <label className="block mb-1 text-sm font-medium">Cost</label>
                  <input
                    placeholder="Enter"
                    type="text"
                    name="cost"
                    className="mt-1 p-2 border rounded-lg w-full text-sm"
                  />
                </div>
                <div className="ml-10">
                  <label className="block mb-1 text-sm font-medium">Pulse Rate</label>
                  <input
                    placeholder="Enter"
                    type="text"
                    name="pulseRate"
                    className="mt-1 p-2 border rounded-lg w-full text-sm"
                  />
                </div>
                <div className="mx-10">
                  <label className="block mb-1 text-sm font-medium">Respiratory Rate</label>
                  <input
                    placeholder="Enter"
                    type="text"
                    name="respiratoryRate"
                    className="mt-1 p-2 border rounded-lg w-full text-sm"
                  />
                </div>
                <div className="ml-10">
                  <label className="block mb-1 text-sm font-medium">Record Date</label>
                  <input
                    type="date"
                    name="recordDate"
                    className="mt-1 p-2 border rounded-lg w-full text-sm"
                  />
                </div>
                <div className="flex space-x-4 w-[85%] mx-10">
              <div className="w-full">
                <label className="block mb-1 text-sm font-medium">Created At</label>
                <input
                  type="date"
                  name="createdAt"
                  className="mt-1 p-2 border rounded-lg w-full text-sm"
                />
              </div>
              <div className="w-full">
                <label className="block mb-1 text-sm font-medium">Updated At</label>
                <input
                  type="date"
                  name="updatedAt"
                 className="mt-1 w-full p-2 border rounded-lg text-sm"
                />
              </div>
            </div>
              </div>
              <div className="flex justify-end mt-6 mx-10">
                <button
                  type="submit"
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg"
                >
                  Save & Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      );
    }
    