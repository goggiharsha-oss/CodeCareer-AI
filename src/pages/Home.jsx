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
      <div id="home">
        <Navbar />

        <Hero
          search={search}
          setSearch={setSearch}
        />
      </div>


      <div id="home" className="scroll-mt-24">
  <Navbar />
  <Hero
    search={search}
    setSearch={setSearch}
  />
</div>


<section id="languages" className="scroll-mt-24">
  <LanguageCard search={search} />
</section>


<section id="careers" className="scroll-mt-24">
  <CareerDomains search={search} />
</section>


<section id="salary" className="scroll-mt-24">
  <SalaryComparison />
</section>


      <section id="whychoose">
        <WhyChoose />
      </section>


      <section id="careers">
        <CareerDomains search={search} />
      </section>


      <section id="statistics">
        <Statistics />
      </section>


      <section id="salary">
        <SalaryComparison />
      </section>


      <section id="ai">
        <AIAssistant />
      </section>


      <Footer />

    </>
  );
}

export default Home;