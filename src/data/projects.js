export const projects = [
  {
    id: "cordees",
    title: "Les Cordées du Leadership",
    summary:
      "Site vitrine de Nicolas Stoeckel, Mentor d'affaires qui aide des dirigeants à gravir les décisions qu'ils ne peuvent plus prendre seuls et à tenir la trajectoire correspondante. Projet client mené de bout en bout : refonte d'une page HTML statique en application React/Vite, déploiement sur Netlify avec domaine dédié, sécurisation du site et mise en conformité RGPD.",
    stack: ["React", "Vite", "SCSS", "Node", "Netlify", "OVH"],
    image: "/images/cordees.webp",
    links: { demo: "https://lescordees.pro", code: "" },
  },
  {
    id: "argentbank",
    title: "ArgentBank",
    summary:
      "Application web bancaire avec espace client sécurisé : connexion, consultation des comptes et édition du profil. Développée en React et Redux Toolkit, avec authentification par token JWT. Conception et documentation de l'API des transactions en Swagger.",
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
    summary:
      "Site vitrine d'une photographe — portraits, mariages, concerts. Mission : optimiser un site existant sans en modifier le design. Audit puis corrections du référencement (SEO), de l'accessibilité (normes WCAG) et de la performance (Lighthouse), avec débogage du code JavaScript.",
    stack: ["JavaScript", "Schema.org", "WebP", "Lighthouse"],
    metrics: [
      { value: "99", label: "Perf" },
      { value: "67→100", label: "A11y" },
      { value: "73→100", label: "SEO" },
    ],
    image: "/images/nina-carducci.webp",
    links: {
      demo: "https://ninacarducci-portfolio.netlify.app/",
      code: "https://github.com/peromarc83-pixel/ninacarducci.github.io",
    },
  },
];
