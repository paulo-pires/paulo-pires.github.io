const descriptions = {
  'pt-br': {
    python: "Python é uma linguagem de programação de alto nível, conhecida por sua simplicidade e legibilidade, amplamente utilizada em desenvolvimento web, ciência de dados, automação e muito mais.",
    angular: "Angular é uma plataforma e framework para construir aplicações web dinâmicas e robustas, utilizando TypeScript como linguagem principal.",
    docker: "Docker é essencial para containerização das minhas aplicações, garantindo deploy seguro e escalável.",
    database: "Experiência sólida com SQL Server, PostgreSQL, Oracle e bancos vetoriais para aplicações complexas.",
    php: "PHP é uma linguagem de script do lado do servidor, especialmente adequada para desenvolvimento web e pode ser embutida em HTML.",
    js: "JavaScript é uma linguagem de programação versátil que permite a criação de elementos dinâmicos e interativos em páginas web.",
    react: "React é uma biblioteca JavaScript para construção de interfaces de usuário, baseada em componentes reutilizáveis.",
    next: "Next.js é um framework React que habilita funcionalidades como renderização do lado do servidor e geração de sites estáticos.",
    tailwind: "Tailwind CSS é um framework de utilitários CSS que permite a criação rápida de interfaces estilizadas diretamente no HTML.",
    typescript: "TypeScript é um superset do JavaScript que adiciona tipagem estática e outros recursos avançados, facilitando a manutenção e escalabilidade do código."
  },
  'en': {
    python: "Python is a high-level programming language known for its simplicity and readability, widely used in web development, data science, automation, and more.",
    angular: "Angular is a platform and framework for building dynamic and robust web applications, using TypeScript as the main language.",
    docker: "Docker is essential for containerizing my applications, ensuring secure and scalable deployment.",
    database: "Solid experience with SQL Server, PostgreSQL, Oracle, and vector databases for complex applications.",
    php: "PHP is a server-side scripting language especially suited for web development and can be embedded into HTML.",
    js: "JavaScript is a versatile programming language that enables the creation of dynamic and interactive elements on web pages.",
    react: "React is a JavaScript library for building user interfaces, based on reusable components.",
    next: "Next.js is a React framework that enables functionalities like server-side rendering and static site generation.",
    tailwind: "Tailwind CSS is a utility-first CSS framework that allows for rapid creation of styled interfaces directly in HTML.",
    typescript: "TypeScript is a superset of JavaScript that adds static typing and other advanced features, making code maintenance and scalability easier."
  }
};
export function hoverChangeDescription(nameCard, key, lang = 'pt-br') {
  const changeDescription = document.querySelector(".changeDescription");

  if (!changeDescription) {
    console.error("Element with class 'changeDescription' not found.");
    return;
  }

  document.querySelector(nameCard).addEventListener("mouseover", () => {
    changeDescription.innerHTML = descriptions[lang][key];
  });

  document.querySelector(nameCard).addEventListener("mouseout", () => {
    changeDescription.innerHTML = lang === 'pt-br' ? `*passe o cursor do mouse no card para ler*` : `*hover over the card to read*`;
  });
}
