// Components
import HeroSection from "../../components/HeroSection/HeroSection";
import AboutSection from "../../components/AboutSection/AboutSection";
import NavigationBar from "../../components/NavBar/NavigationBar";
import PreLoader from "../../components/PreLoader/PreLoader";
import ProjectSection from "../../components/ProjectSection/ProjectSection";
import ScrollTop from "../../components/ScrollTop/ScrollTop";

// Assets
import "../../index.css";

// Libraries
import { Toaster } from "../../components/ui/toaster";

function App() {
  return (
    <>
      <div className="w-full h-full" id="#">
        <ScrollTop />
        <NavigationBar />
        <main className={`lg:px-[10%] px-[5%] h-screen`}>
          <Toaster />
          <PreLoader />
          <div className={`h-full w-full`}>
            <HeroSection />
            <AboutSection />
            <ProjectSection />
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
