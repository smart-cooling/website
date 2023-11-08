import React from "react";
import { Transition } from "../Transition";

export default function Hero() {
  const bg =
    "bg-[url('https://res.cloudinary.com/mvacoimbra/image/upload/v1699317522/smart-cooling-website/hero-bg.png')]";

  return (
    <section
      className={`${bg} relative flex h-screen items-center bg-cover bg-center bg-no-repeat px-7 text-w-1 md:px-24`}
    >
      <div>
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
