import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import LanguageCard from "../components/LanguageCard";
import Footer from "../components/Footer";
import WhyChoose from "../components/WhyChoose";
import Statistics from "../components/Statistics";
import SalaryComparison from "../components/SalaryComparison";
import CareerDomains from "../components/CareerDomains";
import AIAssistant from "../components/AIAssistant";

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

      <LanguageCard search={search} />

      <WhyChoose />

      <CareerDomains search={search} />

      <Statistics />

      <SalaryComparison />

      <AIAssistant />

      <Footer />
    </>
    
  );
}

export default Home;