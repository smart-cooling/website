import NavBar from "./components/NavBar";
import Mvv from "./components/sections/Mvv";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import SunflakeBar from "./components/SunflakeBar";
import Portfolio from "./components/sections/Portfolio";

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-s-3 to-s-2 font-sans">
      <NavBar />
      <Hero />
      <About />
      <SunflakeBar />
      <Mvv />
      <Portfolio />
    </main>
  );
}
