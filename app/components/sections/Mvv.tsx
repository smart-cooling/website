import React from "react";
import Card from "../Card";
import { Transition } from "../Transition";

export default function Mvv() {
  const bg =
    "bg-[url('https://res.cloudinary.com/mvacoimbra/image/upload/v1699387911/smart-cooling-website/about-bg.svg')]";

  return (
    <section
      className={`relative w-full overflow-hidden px-7 py-5 md:px-24 md:py-12`}
    >
      <div
        className="absolute left-0 top-0 z-0 h-full w-screen rotate-180"
        style={{
          background:
            "radial-gradient(120.95% 229.62% at 48.12% -141.76%, #051330 6.03%, #F80 58.23%, #BE690C 64.57%, #051330 99.92%)",
        }}
      />
      <div className="relative z-10 mb-20">
        <ul className="flex flex-wrap items-start justify-evenly">
          <Card icon="rocket" title="Missão" className="rounded-none">
            <p className="text-center text-xl font-medium">{`Promover o bem-estar e a qualidade de vida dos nossos clientes,
           oferecendo soluções de climatização e energia solar de alta qualidade,
            com excelência em atendimento e sustentabilidade.`}</p>
          </Card>

          <div className=" hidden h-96 w-1 bg-w-1 2xl:flex" />

          <Card icon="eye" title="Visão" className="rounded-none">
            <p className="text-center text-xl font-medium">{`Ser a referência no setor de climatização e energia solar,
           reconhecida pela inovação, eficiência e compromisso com o conforto e a economia dos nossos clientes.`}</p>
          </Card>

          <div className=" hidden h-96 w-1 bg-w-1 2xl:flex" />

          <Card icon="scale" title="Valores" className="rounded-none">
            <ul className="text-center text-xl font-medium">
              <li>Excelência;</li>
              <li>Sustentabilidade;</li>
              <li>Inovação;</li>
              <li>Integridade;</li>
            </ul>
          </Card>
        </ul>
      </div>
      <Transition asset="mvv-transition" />
    </section>
  );
}
