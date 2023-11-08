import React from "react";
import { Transition } from "../Transition";

export default function Hero() {
  const bg =
    "bg-[url('https://res.cloudinary.com/mvacoimbra/image/upload/v1699455524/smart-cooling-website/hero-bg.png')]";

  return (
    <section
      className={`relative flex h-screen items-center px-7 text-w-1 md:px-24 ${bg} bg-cover bg-center bg-no-repeat`}
    >
      <div className="absolute left-0 top-0 z-0 h-screen w-screen bg-gradient-to-r from-o-1 via-o-4 to-b-1 opacity-80 mix-blend-multiply" />
      <div className="z-10">
        <h1 className="mb-1 text-4xl font-medium md:text-6xl">
          {"Seu conforto é a nossa missão!"}
        </h1>
        <h6 className="max-w-xl text-lg font-medium md:text-xl">
          {
            "Descubra o conforto climático e a eficiência energética que você merece. Sua jornada começa aqui."
          }
        </h6>

        <Transition
          className="absolute bottom-0 left-0 w-screen"
          asset="hero-transition"
        />
      </div>
    </section>
  );
}
