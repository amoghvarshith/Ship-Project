import React from "react";
// import Neweffect from "./Greeting/UseEffect"; // Correct import path
// import Child from "./Greeting/child";
// import Trail from "./Greeting/Trail";
// import New from "./Greeting/New";
// import SignUp from "./Greeting/SignUp";
import Navbar from "./ProjectComp/Navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./ProjectComp/Home";
import Dashboard from "./ProjectComp/Dashboard";
import MobileNumber from "./ProjectComp/MobileNumber";
import UsaNumbers from "./ProjectComp/UsaNumbers";
import FranceNumbers from "./ProjectComp/FranceNumbers";
import ItalyNumbers from "./ProjectComp/ItalyNumbers";
import GermanyNumbers from "./ProjectComp/GermanyNumbers";
function App() {

  return (
    <div>
      <BrowserRouter>

        <Navbar />
        <Routes>
          <Route path="/" exact Component={Home}/>
          <Route path="/dashboard" exact Component={Dashboard}/>
          <Route path="/mobilenumbers" exact Component={MobileNumber}/>
          <Route path="/usaNumbers" exact Component={UsaNumbers}/>
          <Route path="/franceNumbers" exact Component={FranceNumbers}/>
          <Route path="/italyNumbers" exact Component={ItalyNumbers}/>

          <Route path="/GermanyNumbers" exact Component={GermanyNumbers}/>

         



        </Routes>
        
        


      </BrowserRouter>

    </div>
  );
}

export default App;
