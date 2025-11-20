export function hoverChangeExperience(nameCard, key, lang = 'pt-br') {
  const experiences = {
    'pt-br': {
      foccos: {
        title: "Foccos Tecnologia",
        company: "Foccos Tecnologia",
        date: "Jun 2023 - Atualmente",
        description: "Atuo no desenvolvimento de soluções de missão crítica para Logística Portuária Alfandegada. Desenvolvo sistemas de Visão Computacional (LPR) e middlewares de integração com hardware (Balanças, Sensores, Biometria), garantindo a automação de pátios e a conformidade fiscal junto à Receita Federal com Python e SQL Server."
      },
      noxie: {
        title: "Noxie",
        company: "Noxie",
        date: "Mai 2022 - Jun 2023",
        description: "Liderei o desenvolvimento de soluções de Reconhecimento Facial Mobile e OCR utilizando Python, OpenCV e face-api (Node.js). Arquitetei APIs de alta performance com FastAPI e gerenciei infraestrutura Docker e Oracle DB para validação de identidade digital."
      },
      ani: {
        title: "A.N.I Sistemas",
        company: "A.N.I Sistemas",
        date: "Mai 2021 - Mai 2023",
        description: "Desenvolvi sistemas de monitoramento de frotas e geolocalização. Implementei algoritmos de Geofencing (cercas virtuais), alertas de desvio de rota e manipulação de polígonos complexos em mapas utilizando Node.js e bancos NoSQL."
      },
      pulses: {
        title: "Pulses Gupy",
        company: "Pulses Gupy",
        date: "Abr 2020 - Abr 2021",
        description: "Atuei na Engenharia de Performance e Dados. Otimizei bancos de dados OLTP (SingleStore) e queries complexas. Trabalhei com Python (Flask) em microserviços de Machine Learning (NLP) e automação de testes."
      },
      convert: {
        title: "Convertter",
        company: "Convertter",
        date: "Mar 2019 - Mar 2020",
        description: "Desenvolvedor Full-stack focado em E-commerce de alto tráfego (Magento). Atuei na otimização de performance, configuração de servidores Linux e integração de APIs de pagamento e logística."
      },
      geosapiens: {
        title: "GeoSapiens",
        company: "GeoSapiens",
        date: "Fev 2018 - Fev 2019",
        description: "Desenvolvimento Back-end em soluções de Cartografia Digital. Trabalhei com PHP Symfony, Java e PostgreSQL, manipulando dados espaciais e camadas de mapas."
      }
    },
    'en': {
      foccos: {
        title: "Foccos Tecnologia",
        company: "Foccos Tecnologia",
        date: "Jun 2023 - Present",
        description: "Developing mission-critical solutions for Customs Port Logistics. Building Computer Vision systems (LPR) and middleware for hardware integration (Scales, Sensors, Biometrics), ensuring yard automation and fiscal compliance using Python and SQL Server."
      },
      noxie: {
        title: "Noxie",
        company: "Noxie",
        date: "May 2022 - Jun 2023",
        description: "Led the development of Mobile Facial Recognition and OCR solutions using Python, OpenCV, and face-api (Node.js). Architected high-performance APIs with FastAPI and managed Docker infrastructure and Oracle DB."
      },
      ani: {
        title: "A.N.I Sistemas",
        company: "A.N.I Sistemas",
        date: "May 2021 - May 2023",
        description: "Developed fleet monitoring and geolocation systems. Implemented Geofencing algorithms, route deviation alerts, and polygon manipulation on maps using Node.js and NoSQL databases."
      },
      pulses: {
        title: "Pulses Gupy",
        company: "Pulses Gupy",
        date: "Apr 2020 - Apr 2021",
        description: "Worked on Performance Engineering and Data. Optimized OLTP databases (SingleStore) and complex queries. Worked with Python (Flask) on Machine Learning (NLP) microservices."
      },
      convert: {
        title: "Convertter",
        company: "Convertter",
        date: "Mar 2019 - Mar 2020",
        description: "Full-stack developer focused on high-traffic E-commerce (Magento). Worked on performance optimization, Linux server configuration, and API integrations."
      },
      geosapiens: {
        title: "GeoSapiens",
        company: "GeoSapiens",
        date: "Feb 2018 - Feb 2019",
        description: "Back-end development for Digital Cartography solutions. Worked with PHP Symfony, Java, and PostgreSQL, handling spatial data and map layers."
      }
    }
  };

  const varChangeDescription = document.querySelector(".changeExperience");
  const varCompanyExperience = document.querySelector(".companyExperience");
  const varDateExperience = document.querySelector(".dateExperience");
  const card = document.querySelector(nameCard);

  if (!varChangeDescription || !varCompanyExperience || !varDateExperience || !card) {
    return; // Evita erros se o elemento não existir
  }

  card.addEventListener("click", () => {
    // 1. Verifica se a chave existe nos dados antes de trocar
    if (experiences[lang][key]) {
      varChangeDescription.innerHTML = experiences[lang][key].description;
      varCompanyExperience.innerHTML = experiences[lang][key].company;
      varDateExperience.innerHTML = experiences[lang][key].date;
    }

    // 2. Lógica de troca de classe "Active" (Visual)
    // Remove a classe de quem estiver ativo no momento
    const currentActive = document.querySelector(".activeExperience");
    if (currentActive) {
      currentActive.classList.remove("activeExperience");
    }
    // Adiciona a classe no card que foi clicado
    card.classList.add("activeExperience");
  });
}
