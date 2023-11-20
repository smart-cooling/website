import React from "react";
import SectionTitle from "../SectionTitle";
import Card from "../Card";

export default function About() {
  const shadow: string = "shadow-[4px_4px_0_0_rgba(240,154,56,1)]";

  return (
    <section
      className="bg-gradient-to-b from-b-2 from-10% to-b-4 to-90% px-7 py-5 md:px-24 md:py-12"
      id="about"
    >
      <SectionTitle title="Sobre nós" icon="flake" />
      <ul className="mb-10 flex flex-wrap justify-evenly gap-x-10 gap-y-10">
        <Card
          icon="store"
          className={`bg-b-4 text-base font-medium text-w-2 ${shadow}`}
        >
          <p className="indent-5">
            {`Fundada em 2021 na cidade de Anápolis, Goiás, por Guilherme de Moura Cardoso, a Smart Cooling é uma empresa especializada na venda, instalação e manutenção de equipamentos de ar-condicionado e energia solar.`}
          </p>
          <p className="indent-5">
            {`Nossa equipe é formada por profissionais experientes que estão dedicados a entender as necessidades individuais de cada cliente e oferecer soluções sob medida que atendam a essas necessidades.`}
          </p>
        </Card>
        <Card
          icon="bolt"
          className={`bg-b-4 text-base font-medium text-w-2 ${shadow}`}
        >
          <p className="indent-5">
            {`Nossa expertise abrange tanto o setor de climatização quanto o de energia solar, permitindo-nos oferecer uma gama completa de serviços, desde a seleção dos melhores equipamentos até a instalação e manutenção contínua.`}
          </p>
          <p className="indent-5">
            {`Nosso foco na sustentabilidade nos impulsiona a utilizar tecnologias eficientes e energias renováveis, contribuindo para um mundo mais verde. `}
          </p>
        </Card>
        <Card
          icon="people"
          className={`bg-b-4 text-base font-medium text-w-2 ${shadow}`}
        >
          <p className="indent-5">
            {`Na Smart Cooling, oferecemos mais que apenas  produtos e serviços, construímos relacionamentos de longo prazo com nossos clientes. `}
          </p>
          <p className="indent-5">
            {`Valorizamos a confiança que eles depositam em nós e nos esforçamos para superar suas expectativas a cada passo do caminho.`}
          </p>
        </Card>
      </ul>
    </section>
  );
}
