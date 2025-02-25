import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Desenvolvimento Web",
          "Marketing Digital",
          "Gestão de Redes Sociais",
          "Configuração de Servidores de jogos",
          "Formatação e Manutenção de Computadores",
        ],
        autoStart: true,
        loop: true,
        delay : 0,
        deleteSpeed: 10,
        typeSpeed: 0.5, 
      }}
    />
  );
}

export default Type;
