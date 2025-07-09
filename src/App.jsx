import React, { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Work from "./components/Work/Work";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { LazyMotion, domAnimation } from "framer-motion";

const App = () => {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = isMobile ? "auto" : "smooth";

    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, [isMobile]);

  return (
    <LazyMotion features={domAnimation}>
      <div className="bg-[#050414]">
        {/* Show BlurBlob only on desktop */}
      

        {/* Responsive background pattern */}
        <div
          className={`absolute inset-0 ${
            isMobile
              ? "bg-[linear-gradient(to_right,#4f4f4f2e_2px,transparent_2px)] bg-[size:24px_24px]"
              : "bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"
          } [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]`}
        ></div>

        <div className="relative pt-20">
          <Navbar />
          <About />
          <Skills />
          <Experience />
          <Work />
          <Education />
          <Contact />
          <Footer />
        </div>
      </div>
    </LazyMotion>
  );
};

export default App;
