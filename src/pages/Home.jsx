import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import LanguageCard from "../components/LanguageCard";
import Footer from "../components/Footer";
import WhyChoose from "../components/WhyChoose";
import Statistics from "../components/Statistics";
import SalaryComparison from "../components/SalaryComparison";
import CareerDomains from "../components/CareerDomains";


function Home() {

  const [search, setSearch] = useState("");


  return (

    <>

      <div id="top">

        <Navbar />

        <Hero
          search={search}
          setSearch={setSearch}
        />

      </div>



      <section id="languages">
        <LanguageCard search={search} />
      </section>



      <WhyChoose />



      <CareerDomains
        search={search}
      />



      <Statistics />



      <SalaryComparison />



      <Footer />

    </>

  );

}


export default Home;