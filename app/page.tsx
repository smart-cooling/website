import NavBar from "./components/NavBar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import SunflakeBar from "./components/SunflakeBar";
import Mvv from "./components/sections/Mvv";
import Portfolio from "./components/sections/Portfolio";
import Contact from "./components/sections/Contact";

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-s-3 to-s-2 font-sans">
      <NavBar />
      <Hero />
      <About />
      <SunflakeBar />
      <Mvv />
      <Portfolio />
      <Contact />
    </main>
  );
}
