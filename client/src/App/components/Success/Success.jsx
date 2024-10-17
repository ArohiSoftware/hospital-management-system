import React, { useState } from "react";

const SuccessModal = () => {
  const [showModal, setShowModal] = useState(true);

  return (
    <div>
      {showModal ? (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg text-center max-w-lg mx-auto relative">
            {/* Top green section */}
            <div className="bg-green-400 w-full h-16 rounded-t-lg"></div>

            {/* Content section */}
            <div className="p-10">
              <div className="flex justify-center mb-4">
                <div className="rounded-full p-2 bg-green-500">
                  <div className="relative w-20 h-20 m-auto flex items-center justify-center bg-white rounded-full">
                    <h1 className="text-5xl text-green-500">✓</h1>
                  </div>
                </div>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Success</h2>
              <p className="text-lg text-gray-600 mb-6">
                Your Report Create Successfully...!
              </p>
              {/* Button centered with padding */}
              <div className="flex justify-center">
                <button
                  onClick={() => setShowModal(false)}
                  className="bg-black text-white font-bold py-2 px-10 rounded-full text-lg"
                >
                  Done.
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default SuccessModal;
