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
        typeSpeed: 15, // Reduzido de 50 para 15 (3x mais rápido)
        deleteSpeed: 15, // Velocidade de apagamento também ajustada
        delay: 0, // Remove qualquer delay adicional
      }}
    />
  );
}

export default Type;