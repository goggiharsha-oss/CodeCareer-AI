import { BrowserRouter, Routes, Route } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";
import BackToTop from "./components/BackToTop";
import LoadingScreen from "./components/LoadingScreen";

import { useTheme } from "./context/ThemeContext";
import { useState, useEffect } from "react";


import Home from "./pages/Home";
import Python from "./pages/Python";
import Java from "./pages/Java";
import C from "./pages/C";
import Cpp from "./pages/Cpp";
import CSharp from "./pages/CSharp";
import Javascript from "./pages/Javascript";

import WebDevelopment from "./pages/WebDevelopment";
import CyberSecurity from "./pages/CyberSecurity";
import ArtificialIntelligence from "./pages/ArtificialIntelligence";
import DataScience from "./pages/DataScience";
import CloudComputing from "./pages/CloudComputing";
import MobileDevelopment from "./pages/MobileDevelopment";

import NotFound from "./pages/NotFound";


function App() {


  const [loading, setLoading] = useState(true);

  const { darkMode } = useTheme();



  useEffect(() => {

    setTimeout(() => {
      setLoading(false);
    }, 2000);

  }, []);




  if (loading) {

    return <LoadingScreen />;

  }




  return (

    <div
      className={`
        min-h-screen
        transition-colors
        duration-500
        ${
          darkMode
            ? "bg-slate-950 text-white"
            : "bg-white text-slate-900"
        }
      `}
    >


      <BrowserRouter>


        <ScrollToTop />



        <Routes>


          <Route
            path="/"
            element={<Home />}
          />


          <Route
            path="/python"
            element={<Python />}
          />


          <Route
            path="/java"
            element={<Java />}
          />


          <Route
            path="/c"
            element={<C />}
          />


          <Route
            path="/cpp"
            element={<Cpp />}
          />


          <Route
            path="/csharp"
            element={<CSharp />}
          />


          <Route
            path="/javascript"
            element={<Javascript />}
          />



          <Route
            path="/web-development"
            element={<WebDevelopment />}
          />



          <Route
            path="/cyber-security"
            element={<CyberSecurity />}
          />



          <Route
            path="/artificial-intelligence"
            element={<ArtificialIntelligence />}
          />



          <Route
            path="/data-science"
            element={<DataScience />}
          />



          <Route
            path="/cloud-computing"
            element={<CloudComputing />}
          />



          <Route
            path="/mobile-development"
            element={<MobileDevelopment />}
          />



          <Route
            path="*"
            element={<NotFound />}
          />


        </Routes>




        <BackToTop />



      </BrowserRouter>


    </div>

  );

}



export default App;