import { initScrollReveal } from "./scrollReveal.js";
import { hoverChangeExperience } from "./hoverChangeExperience.js";
import { typeWrite } from "./typeWrite.js";
import { hoverChangeDescription } from "./hoverChangeDescription.js";
import { menu } from "./menu.js";

menu();
initScrollReveal();
typeWrite(document.querySelector(".typewriter"));

hoverChangeExperience(
  ".geosapiens",
  ` Durante meu período como trainee, aprendi e trabalhei com PHP e
                Symfony, além de desenvolver habilidades em Java e PostgreSQL.
                Também adquiri conhecimentos em virtualização com Docker e
                localização geoespacial, que ampliaram minha compreensão de
                tecnologias de banco de dados e suas aplicações práticas de
                performance.`,
  "Trainee em Desenvolvimento Web",
  "GeoSapiens",
  " 2018 -  2019 (1 ano)"
);

hoverChangeExperience(
  ".convert",
  `Trabalhei na Convert, onde me concentrei na criação de integrações API para plataformas de e-commerce com Magento. Meu principal objetivo era melhorar o desempenho das integrações, garantindo uma comunicação eficiente entre os sistemas e otimizando a performance geral das plataformas.`,
  "Desenvolvedor de Integrações API",
  "Convert",
  " 2019 -  2020 (1 ano)"
);
hoverChangeExperience(
  ".pulses",
  `Implementei soluções de OLTP com SingleStore e MemSQL para otimização de bancos de dados, realizei melhorias no código PHP Laravel e implementei testes automatizados com Cypress.`,
  "Consultor de melhoria de performance",
  "Pulses Gupy",
  " 2020 -  2021 (1 ano)"
);

hoverChangeExperience(
  ".ani",
  `Trabalhei como  gerenciamento de frotas, onde apliquei meu conhecimento full stack em NoSQL, desenvolvi back-end em Node.js, front-end em Angular, e criei aplicativos móveis usando Angular e Cordova para solucionar desafios da empresa.`,
  "Desenvolvedor Full Stack",
  "A.N.I Sistemas",
  "2021 - 2023 (2 anos)"
);

hoverChangeExperience(
  ".foccos",
  `Atualmente, estou em uma empresa na área de gestão e controle de acesso, atuando como desenvolvedor full-stack. Aplicando meus conhecimentos em back-end com Next.js e front-end com React, além de trabalhar com soluções de visão computacional e inteligência artificial utilizando Python. Também gerencio um servidor Windows com banco de dados SQL Server. `,
  "Desenvolvedor Full Stack",
  "Foccos",
  "2023"
);

hoverChangeDescription(
  ".python",
  "Python é uma linguagem de programação de alto nível, conhecida por sua simplicidade e legibilidade, amplamente utilizada em desenvolvimento web, ciência de dados, automação e muito mais."
);
hoverChangeDescription(
  ".angular",
  "Angular é uma plataforma e framework para construir aplicações web dinâmicas e robustas, utilizando TypeScript como linguagem principal."
);
hoverChangeDescription(
  ".php",
  "PHP é uma linguagem de script do lado do servidor, especialmente adequada para desenvolvimento web e pode ser embutida em HTML."
);
hoverChangeDescription(
  ".js",
  "JavaScript é uma linguagem de programação versátil que permite a criação de elementos dinâmicos e interativos em páginas web."
);
hoverChangeDescription(
  ".react",
  "React é uma biblioteca JavaScript para construção de interfaces de usuário, baseada em componentes reutilizáveis."
);
hoverChangeDescription(
  ".next",
  "Next.js é um framework React que habilita funcionalidades como renderização do lado do servidor e geração de sites estáticos."
);
hoverChangeDescription(
  ".tailwind",
  "Tailwind CSS é um framework de utilitários CSS que permite a criação rápida de interfaces estilizadas diretamente no HTML."
);
hoverChangeDescription(
  ".typescript",
  "TypeScript é um superset do JavaScript que adiciona tipagem estática e outros recursos avançados, facilitando a manutenção e escalabilidade do código."
);

