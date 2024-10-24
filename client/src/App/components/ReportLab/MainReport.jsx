import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Page1 from './Page1Reportlist';
import Page2 from './2LabForm';
import Page3 from './3Technician';
import Header from './Navbar';
import Sidebar from './Sidebar';

// Export MedicationContext to share state across components
export const MedicationContext = React.createContext(null);

const App = () => {
  const [medications, setMedications] = useState([]);

  return (
    <div className="h-screen flex flex-col bg-gradient-to-r from-[#c0e2d0] to-[#d1d4d6] p-5">
      

      <div className="flex flex-1">
        
        {/* Sidebar */}
        <div>
          <Sidebar />
        </div>

        {/* Main Content - Medication Management */}
        <div className="flex-1 bg-white p-10 m-4 shadow-lg rounded-md">
        <nav className=" py-4 px-6 w-auto">
        <Header />
      </nav>
          <MedicationContext.Provider value={{ medications, setMedications }}>
            <Router>
              <div className="container mx-auto p-4  bg-opacity-95">
                <Routes>
                  <Route path="/" element={<Page1 />} />
                  <Route path="/new-medication" element={<Page2 />} />
                  <Route path="/medication-details" element={<Page3 />} />
                  <Route path="/edit-medication/:id" element={<Page2 />} />
                  
                </Routes>
              </div>
            </Router>
          </MedicationContext.Provider>
        </div>
      </div>
    </div>
  );
};

export default App;
