import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Portifolio from "./components/Portifolio";
import Skills from "./components/Skills";
import Contact from "./components/Contact";


export default function Home() {
  return (
    <>
     <div className="w-screen"> 
      <Navbar/>
      <Hero/>
      <About/>
      <Portifolio/>
      <Skills/>
      <Contact/>
     </div>
    </>
  );
}
