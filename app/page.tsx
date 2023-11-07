import { NavBar } from "./components/NavBar";
import { About } from "./components/sections/About";
import { Hero } from "./components/sections/Hero";

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-s-3 to-s-2 font-sans">
      <NavBar />
      <Hero />
      <About />
      <div className="h-96 w-full" />
      <div className="h-96 w-full" />
      <div className="h-96 w-full" />
      <div className="h-96 w-full" />
    </main>
  );
}
