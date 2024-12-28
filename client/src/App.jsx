import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SoftwareApp from "./App/SoftwareApp";
import WebApp from "./website/WebApp";


function App() {
  const [isSubdomain, setIsSubdomain] = useState(false);

  useEffect(() => {
    const hostname = window.location.hostname;

    console.log("hostname",hostname)
    const parts = hostname.split(".");

    console.log("parts",parts)
    if (parts.length > 1) {
      setIsSubdomain(true); // If there's a subdomain, set this to true
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/*" element={isSubdomain ? <SoftwareApp /> : <WebApp />} />
      </Routes>
    </Router>
  );
}

export default App;
