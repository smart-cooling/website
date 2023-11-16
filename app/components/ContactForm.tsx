"use client";

import React, { ReactNode, useRef } from "react";
import emailjs from "@emailjs/browser";
import InputMask from "react-input-mask";
// npm add @types/react-input-mask

// input component
type inputProps = {
  label: string;
  children?: ReactNode;
};
function Input({ label, children }: inputProps) {
  return (
    <li className="mb-3 flex flex-col text-b-4">
      <label className="mb-1 text-xl font-medium text-b-4">{label}</label>
      {children}
    </li>
  );
}

export default function ContactForm() {
  // emailjs
  const form = useRef(null);

  function handleSubmit(e: any) {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );

    alert("Mensagem Enviada!");
    e.target.reset();
  }

  return (
    <form
      className="w-1/2 px-7 max-md:w-full max-md:px-0"
      ref={form}
      onSubmit={handleSubmit}
    >
      <ul className="">
        <Input label="Nome">
          <input
            type="text"
            className="h-10 rounded-md border-2 border-o-2 p-3"
            placeholder="nome completo"
            name="name"
            required
          />
        </Input>
        <Input label="Email">
          <input
            type="email"
            className="h-10 rounded-md border-2 border-o-2 p-3"
            placeholder="seumelhor@email.com"
            name="email"
            required
          />
        </Input>
        <Input label="Telefone">
          <InputMask mask={"(99) 9 9999-9999"}>
            <input
              type="tel"
              name="phone"
              placeholder="(00) 0 0000-0000"
              className="h-10 rounded-md border-2 border-o-2 p-3"
              autoComplete="on"
              required
            />
          </InputMask>
        </Input>
        <Input label="Mensagem">
          <textarea
            className="h-48 rounded-md border-2 border-o-2 p-3"
            placeholder="Sua mensagem"
            name="message"
            cols={100}
            rows={100}
            autoCorrect="on"
          />
        </Input>
      </ul>
      <button
        type="submit"
        className="w-1/2 rounded-md bg-gradient-to-r from-o-1 to-o-2 p-3 text-xl font-medium transition-all duration-500 hover:bg-gradient-to-l hover:from-b-1 hover:to-b-3"
      >
        Enviar
      </button>
    </form>
  );
}
