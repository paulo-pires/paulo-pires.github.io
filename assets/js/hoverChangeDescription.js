export function hoverChangeDescription(nameCard, text, lang) {
  const descriptionData = {
    'pt-br': {
      python: "Python é minha linguagem principal para IA, Visão Computacional e Back-end de alta performance (FastAPI/Flask).",
      docker: "Docker é essencial para containerização das minhas aplicações, garantindo deploy seguro e escalável.",
      database: "Experiência sólida com SQL Server, PostgreSQL, Oracle e bancos vetoriais para aplicações complexas.",
      js: "JavaScript é a base para minhas aplicações Web e Node.js.",
      angular: "Angular é o framework que utilizo para criar aplicações web robustas e estruturadas.",
      react: "React é a biblioteca que utilizo para criar interfaces modernas e reativas.",
      next: "Next.js permite criar aplicações React otimizadas com SSR e SEO.",
      typescript: "TypeScript adiciona tipagem estática ao JavaScript, melhorando a qualidade do código.",
      php: "PHP foi a base da minha carreira, com experiência em frameworks como Symfony e Magento."
    },
    'en': {
      python: "Python is my main language for AI, Computer Vision, and High-Performance Backend (FastAPI/Flask).",
      docker: "Docker is essential for containerizing my applications, ensuring secure and scalable deployment.",
      database: "Solid experience with SQL Server, PostgreSQL, Oracle, and vector databases for complex applications.",
      js: "JavaScript is the foundation for my Web and Node.js applications.",
      angular: "Angular is the framework I use to build robust and structured web applications.",
      react: "React is the library I use to build modern and reactive interfaces.",
      next: "Next.js allows creating optimized React applications with SSR and SEO.",
      typescript: "TypeScript adds static typing to JavaScript, improving code quality.",
      php: "PHP was the foundation of my career, with experience in frameworks like Symfony and Magento."
    }
  };

  const changeDescription = document.querySelector(".changeDescription");
  const card = document.querySelector(nameCard);

  card.addEventListener("mouseover", () => {
    if (descriptionData[lang][text]) {
      changeDescription.innerHTML = descriptionData[lang][text];
    }
  });

  card.addEventListener("mouseout", () => {
    // Volta para o texto padrão
    changeDescription.innerHTML = lang === 'pt-br' ? "*passe o cursor do mouse no card para ler*" : "*hover over the card to read*";
  });
}
