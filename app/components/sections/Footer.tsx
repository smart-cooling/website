import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="flex flex-wrap justify-between gap-y-4 bg-s-1 px-7 py-5 text-lg font-medium text-b-4 md:px-24 md:py-12">
      <p>
        {
          "© 2023 SMART COOLING AR CONDICIONADO LTDA - TODOS OS DIREITOS RESERVADOS"
        }
      </p>
      <Link href={"/terms"}>{"TERMOS DE USO | POLÍTICA DE PRIVACIDADE"}</Link>
    </footer>
  );
}
