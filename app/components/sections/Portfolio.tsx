import React from "react";
import SectionTitle from "../SectionTitle";
import Carousel from "../Carousel";
import BrandsCarousel from "../BrandsCarousel";
import Gallery from "../Gallery";

type pTitle = {
  title: string;
};

function PTitle({ title }: pTitle) {
  return (
    <div className="mb-10 flex gap-2">
      <div className="max-h-full w-1 bg-gradient-to-b from-o-1 to-o-3" />
      <h3 className="max-w-2xl text-lg font-medium md:text-2xl">{title}</h3>
    </div>
  );
}

export default function Portfolio() {
  return (
    <section
      className={`relative bg-gradient-to-b from-o-4 from-30% to-g-1 px-7 py-5 md:px-24 md:py-12`}
    >
      <SectionTitle title="Portfólio" icon="sun" />
      <PTitle title="Na Smart Cooling, temos o orgulho de ser a assistência técnica autorizada de marcas renomadas" />
      <Carousel />
      <PTitle title="Além disso, oferecemos serviços especializados para uma variedade de outras marcas" />
      <BrandsCarousel />
      <PTitle title="Confira o nosso portfólio de projetos concluídos" />
      <Gallery />
    </section>
  );
}
