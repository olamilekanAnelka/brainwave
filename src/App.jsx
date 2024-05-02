import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefit from "./components/benefit";
import Button from "./components/button";
import Collaboration from "./components/collaboration";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import Pricing from "./components/pricing";
import Roadmap from "./components/roadmap";
import Services from "./components/services";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefit />
        <Collaboration />
        <Services />
        <Pricing />
        <Roadmap />
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
