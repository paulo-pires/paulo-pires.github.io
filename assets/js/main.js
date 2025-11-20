import { initScrollReveal } from "./scrollReveal.js";
import { hoverChangeExperience } from "./hoverChangeExperience.js";
import { typeWrite } from "./typeWrite.js";
import { hoverChangeDescription } from "./hoverChangeDescription.js";
import { menu } from "./menu.js";

document.addEventListener("DOMContentLoaded", () => {
  menu();
  initScrollReveal();
  typeWrite(document.querySelector(".typewriter"));

  // Pega a linguagem do navegador ou define 'en' como padrão
  var lang = (navigator.language || navigator.userLanguage || 'en').toLowerCase().includes('pt') ? 'pt-br' : 'en';

  function changeLanguage(_lang) {
    lang = _lang === 'pt-br' ?'pt-br': 'en'  ;
    updateDescriptions();
    document.getElementById('home-title').innerHTML = translations[lang].homeTitle;
    document.getElementById('home-description').innerHTML = translations[lang].homeDescription;
    document.getElementById('contact-me').innerHTML = translations[lang].contactMe;
    document.getElementById('about-title').innerHTML = translations[lang].aboutTitle;
    document.getElementById('about-name').innerHTML = translations[lang].aboutName;
    document.getElementById('about-description').innerHTML = translations[lang].aboutDescription;
    document.getElementById('experience-title').innerHTML = translations[lang].experienceTitle;
    document.getElementById('experience-description').innerHTML = translations[lang].experienceDescription;
    document.getElementById('projects-title').innerHTML = translations[lang].projectsTitle;
    document.getElementById('services-title').innerHTML = translations[lang].servicesTitle;
    document.getElementById('services-ai').innerHTML = translations[lang].servicesAI;
    document.getElementById('services-development').innerHTML = translations[lang].servicesDevelopment;
    document.getElementById('services-integration').innerHTML = translations[lang].servicesIntegration;
    document.getElementById('skills-title').innerHTML = translations[lang].skillsTitle;
    document.getElementById('skills-description').innerHTML = translations[lang].skillsDescription;
    document.getElementById('footer-text').innerHTML = translations[lang].footerText;
  }

  function updateDescriptions() {
    hoverChangeExperience(".geosapiens", 'geosapiens', lang);
    hoverChangeExperience(".noxie", 'noxie', lang);
    hoverChangeExperience(".convert", 'convert', lang);
    hoverChangeExperience(".pulses", 'pulses', lang);
    hoverChangeExperience(".ani", 'ani', lang);
    hoverChangeExperience(".foccos", 'foccos', lang);

    hoverChangeDescription(".python", 'python', lang);
    hoverChangeDescription(".docker", 'docker', lang); // ADICIONADO
    hoverChangeDescription(".database", 'database', lang); // ADICIONADO
    hoverChangeDescription(".angular", 'angular', lang);
    hoverChangeDescription(".js", 'js', lang);
    hoverChangeDescription(".react", 'react', lang);
    //  hoverChangeDescription(".php", 'php', lang);
    // hoverChangeDescription(".next", 'next', lang);
    // hoverChangeDescription(".tailwind", 'tailwind', lang);
    // hoverChangeDescription(".typescript", 'typescript', lang);
  }

  // Inicializa as descrições
  updateDescriptions();

  // Exponha a função changeLanguage no escopo global
  window.changeLanguage = changeLanguage;
});
