import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import Services from "./components/Services";

function App() {
  return (
    <div className="">
      <Header />
      <Hero/>
      <Benefits/>
      <Collaboration/>
      <Services/>
      <Pricing/>
      <Roadmap/>
      <Footer/>
    </div>
  );
}

export default App;
