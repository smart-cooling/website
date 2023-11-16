import React, { ReactNode } from "react";
import SectionTitle from "../SectionTitle";
import CloudImage from "../CloudImage";
import ContactForm from "../ContactForm";

type contacInfoProps = {
  icon: string;
  children?: ReactNode;
};

function ContactInfo({ icon, children }: contacInfoProps) {
  return (
    <li className="mb-3 flex items-center gap-2">
      <CloudImage
        src={`website/icons/icon-${icon}`}
        alt={`icon-${icon}`}
        height={1280}
        width={720}
        className="h-7 w-auto"
      />
      {children}
    </li>
  );
}

export default function Contact() {
  return (
    <section className="relative bg-gradient-to-b from-s-3 to-s-2 px-7 py-5 md:px-24 md:py-12">
      <SectionTitle title="Contato" icon="sunflake" />
      <div className="flex justify-between rounded-3xl bg-s-1 p-10 max-md:flex-col-reverse max-md:items-center">
        <div className="w-1/2 flex-col items-center max-md:mt-10 max-md:flex max-md:w-full">
          <h3 className="mb-10 bg-gradient-to-r from-o-1 to-o-2 bg-clip-text text-3xl font-bold text-transparent">
            {"Fale conosco para mais informações, dúvidas ou orçamentos."}
          </h3>
          <ul className="text-lg font-normal text-b-4">
            <ContactInfo icon="pin">
              <a
                href="https://maps.app.goo.gl/mB4Mfq62uemqq2f68"
                target="blank"
                className="transition-all duration-300 hover:text-b-1"
              >
                {
                  "Av. Hélio Ferreira da Cunha, Qd 02 Lt 50, Res. Flamboyant, Anápolis - GO, 75101-235"
                }
              </a>
            </ContactInfo>
            <ContactInfo icon="instagram">
              <a
                href="https://www.instagram.com/smartcoolingservices20/"
                target="blank"
                className="transition-all duration-300 hover:text-b-1"
              >
                {"/smartcoolingservices20"}
              </a>
            </ContactInfo>
            <ContactInfo icon="whatsapp">
              <a
                href="https://api.whatsapp.com/send?phone=5562985790586&text=Ol%C3%A1!%20Vim%20pelo%20website%20e%20gostaria%20de%20falar%20sobre..."
                target="blank"
                className="transition-all duration-300 hover:text-b-1"
              >
                {"(62) 98579-0586"}
              </a>
            </ContactInfo>
          </ul>
          <CloudImage
            src="website/qr-wa"
            height={1280}
            width={1280}
            alt="QR-CODE"
            className="mt-10 w-60 rounded-3xl border-2 border-o-1"
          />
        </div>
        <div className="relative w-1 bg-o-2 max-md:hidden" />
        <ContactForm />
      </div>
    </section>
  );
}
