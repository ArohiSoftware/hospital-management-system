import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Homepage";
import CreateAccount from "./components/Registation/CreateAccount";
import IPD from "./components/IPD/IPD";

function WebApp() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path='/ipd' element={<IPD/>}/>
    </Routes>
  );
}

export default WebApp;
