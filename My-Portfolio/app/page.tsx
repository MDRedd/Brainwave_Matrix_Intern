import Header from "./components/header";
import HeroSection from "./components/heroSection";
import AboutSection from "./components/aboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/footer";
import React from "react";

const Home: React.FC = () => (
  <>
    <div className="p-0 m-0">
      <Header />
      <HeroSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  </>
);

export default Home;
