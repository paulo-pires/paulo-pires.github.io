const experiences = {
  'pt-br': {
    geosapiens: {
      description: `Durante meu período como trainee, aprendi e trabalhei com PHP e Symfony, além de desenvolver habilidades em Java e PostgreSQL. Também adquiri conhecimentos em virtualização com Docker e localização geoespacial, que ampliaram minha compreensão de tecnologias de banco de dados e suas aplicações práticas de performance.`,
      title: "Trainee em Desenvolvimento Web",
      company: "GeoSapiens",
      date: "Fev 2018 - Fev 2019 (1 ano)"
    },
    convert: {
      description: `Trabalhei na Convert, onde me concentrei na criação de integrações API para plataformas de e-commerce com Magento. Meu principal objetivo era melhorar o desempenho das integrações, garantindo uma comunicação eficiente entre os sistemas e otimizando a performance geral das plataformas.`,
      title: "Desenvolvedor de Integrações API",
      company: "Convert",
      date: "Mar 2019 - Mar 2020 (1 ano)"
    },
    pulses: {
      description: `Implementei soluções de OLTP com SingleStore e MemSQL para otimização de bancos de dados, realizei melhorias no código PHP Laravel e implementei testes automatizados com Cypress.`,
      title: "Consultor de melhoria de performance",
      company: "Pulses Gupy",
      date: "Abr 2020 - Abr 2021 (1 ano)"
    },
    ani: {
      description: `Trabalhei como gerenciamento de frotas, onde apliquei meu conhecimento full stack em NoSQL, desenvolvi back-end em Node.js, front-end em Angular, e criei aplicativos móveis usando Angular e Cordova para solucionar desafios da empresa.`,
      title: "Desenvolvedor Full Stack",
      company: "A.N.I Sistemas",
      date: "Mai 2021 - Mai 2023 (2 anos)"
    },
    foccos: {
      description: `Atualmente, estou em uma empresa na área de gestão e controle de acesso, atuando como desenvolvedor full-stack. Aplicando meus conhecimentos em back-end com Next.js e front-end com React, além de trabalhar com soluções de visão computacional e inteligência artificial utilizando Python. Também gerencio um servidor Windows com banco de dados SQL Server.`,
      title: "Desenvolvedor Full Stack",
      company: "Foccos",
      date: "Jun 2023 - Presente"
    }
  },
  'en': {
    geosapiens: {
      description: `During my trainee period, I learned and worked with PHP and Symfony, as well as developed skills in Java and PostgreSQL. I also gained knowledge in virtualization with Docker and geospatial localization, which expanded my understanding of database technologies and their practical performance applications.`,
      title: "Web Development Trainee",
      company: "GeoSapiens",
      date: "Feb 2018 - Feb 2019 (1 year)"
    },
    convert: {
      description: `I worked at Convert, where I focused on creating API integrations for e-commerce platforms with Magento. My main goal was to improve the performance of integrations, ensuring efficient communication between systems and optimizing the overall performance of the platforms.`,
      title: "API Integrations Developer",
      company: "Convert",
      date: "Mar 2019 - Mar 2020 (1 year)"
    },
    pulses: {
      description: `I implemented OLTP solutions with SingleStore and MemSQL for database optimization, made improvements to PHP Laravel code, and implemented automated tests with Cypress.`,
      title: "Performance Improvement Consultant",
      company: "Pulses Gupy",
      date: "Apr 2020 - Apr 2021 (1 year)"
    },
    ani: {
      description: `I worked in fleet management, where I applied my full stack knowledge in NoSQL, developed back-end in Node.js, front-end in Angular, and created mobile applications using Angular and Cordova to solve company challenges.`,
      title: "Full Stack Developer",
      company: "A.N.I Sistemas",
      date: "May 2021 - May 2023 (2 years)"
    },
    foccos: {
      description: `Currently, I am at a company in the area of management and access control, working as a full-stack developer. Applying my knowledge in back-end with Next.js and front-end with React, as well as working with computer vision and artificial intelligence solutions using Python. I also manage a Windows server with SQL Server database.`,
      title: "Full Stack Developer",
      company: "Foccos",
      date: "Jun 2023 - Present"
    }
  }
};

export function hoverChangeExperience(nameCard, key, lang = 'pt-br') {
  const varChangeDescription = document.querySelector(".changeExperience");
  const varCompanyExperience = document.querySelector(".companyExperience");
  const varDateExperience = document.querySelector(".dateExperience");
  
  if (!varChangeDescription  || !varCompanyExperience || !varDateExperience) {
    console.error("One or more elements not found in the DOM.");
    return;
  }

  document.querySelector(nameCard).addEventListener("click", () => {
    varChangeDescription.innerHTML = experiences[lang][key].description;
    varCompanyExperience.innerHTML = experiences[lang][key].company;
    varDateExperience.innerHTML = experiences[lang][key].date;
  });
}

const header = document.getElementById("experience-company");
const btns = header.getElementsByClassName("company");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    const current = document.getElementsByClassName("activeExperience");
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" activeExperience", "");
    }
    this.className += " activeExperience";
  });
}