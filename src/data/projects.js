export const projects = [
  {
    id: "cordees",
    title: "Les Cordées du Leadership",
    shortTitle: "Les Cordées",
    type: "client",
    summary:
      "Il s’agit du site vitrine d’un mentor d’affaires qui accompagne les dirigeants lorsqu’ils doivent prendre des décisions difficiles à gérer seuls. Le projet est parti d’une page HTML statique que j’ai transformée en application React. J’ai ensuite déployé le site sur Netlify, relié un nom de domaine dédié chez OVH, puis travaillé sur sa sécurisation et sa conformité réglementaire.",
    context: [
      { label: "Client", value: "Nicolas Stoeckel, mentor d'affaires" },
      { label: "Rôle", value: "de la conception à la mise en ligne" },
      { label: "En ligne", value: "lescordees.pro" },
    ],
    stack: ["React", "Vite", "SCSS", "Node", "Netlify", "OVH"],
    image: "/images/cordees.webp",
    links: { demo: "https://lescordees.pro", code: "" },
  },
  {
    id: "argentbank",
    title: "ArgentBank",
    type: "formation",
    summary:
      "ArgentBank est une application bancaire qui propose un espace client avec authentification, consultation des comptes et modification du profil. Je l’ai développée avec React et Redux Toolkit, en utilisant des jetons JWT pour l’authentification. Le projet comprenait aussi la conception et la documentation avec Swagger de l’API dédiée aux transactions.",
    stack: ["React", "Redux Toolkit", "React Router", "Express", "MongoDB", "JWT"],
    image: "/images/argentbank.webp",
    links: {
      demo: "https://argentbank-frontend.netlify.app/",
      code: "https://github.com/peromarc83-pixel/ArgentBank-Frontend",
    },
  },
  {
    id: "nina-carducci",
    title: "Nina Carducci",
    type: "formation",
    summary:
      "Nina Carducci est le site vitrine d’une photographe spécialisée dans les portraits, les mariages et les événements, notamment les concerts. Ma mission consistait à optimiser le site existant sans en modifier le design. J’ai commencé par un audit, puis corrigé des problèmes de référencement (SEO) et d’accessibilité, amélioré les performances mesurées avec Lighthouse et débogué le code JavaScript.",
    stack: ["JavaScript", "Schema.org", "WebP", "Lighthouse"],
    metricsCaption: "Scores Lighthouse sur 100, avant → après mon intervention",
    metrics: [
      { label: "Performance", before: "non mesurable", after: "99" },
      { label: "Accessibilité", before: "67", after: "100" },
      { label: "Référencement", before: "73", after: "100" },
    ],
    image: "/images/nina-carducci.webp",
    links: {
      demo: "https://ninacarducci-portfolio.netlify.app/",
      code: "https://github.com/peromarc83-pixel/ninacarducci.github.io",
    },
  },
];
