import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { Contact } from "./pages/Contact";
// import { Portfolio } from "./pages/Portfolio";
import ServicePage from "./pages/ServicePage";
import Mobile from "./pages/Mobile";
import SoftwareDevelopmentpage from "./pages/SoftwareDevelopmentpage";
import CyberSecurityPage from "./pages/CyberSecurityPage";
import ITConsultingPage from "./pages/ITConsultingPage";
import DataAnalyticsPage from "./pages/DataConsulting";
import EcommercePage from "./pages/EcommercePage";
function App() {
  return (
    <>
      <div className="relative h-full w-full bg-slate-950">
        <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
      </div>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/services" element={<Services></Services>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        {/* <Route path="/Portfolio" element={<Portfolio></Portfolio>}></Route> */}
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/services/web" element={<ServicePage></ServicePage>}></Route>
        <Route path="/services/mobile" element={<Mobile></Mobile>}></Route>
        <Route path="/services/cyber" element={<CyberSecurityPage></CyberSecurityPage>}></Route>
        <Route path="/services/software" element={<SoftwareDevelopmentpage></SoftwareDevelopmentpage>}></Route>
        <Route path="/services/consulting" element={<ITConsultingPage></ITConsultingPage>}></Route>
        <Route path="/services/analytics" element={<DataAnalyticsPage></DataAnalyticsPage>}></Route>
        <Route path="/services/ecommerce" element={<EcommercePage></EcommercePage>}></Route>
      </Routes>
    </>
  );
}

export default App;
