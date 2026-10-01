import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiSass,
  SiRedux,
  SiVite,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiJsonwebtokens,
  SiSwagger,
  SiGit,
  SiGithub,
  SiNetlify,
  SiOvh,
  SiFigma,
  SiLighthouse,
  SiEslint,
  SiPrettier,
} from 'react-icons/si'
import {
  Webhook,
  Accessibility,
  Search,
  ShieldCheck,
  Lock,
  Gauge,
  Code2,
  Server,
  Wrench,
} from 'lucide-react'

/**
 * Section « Compétences » présentée sous forme de 4 sphères (une par univers)
 * alignées sur une même ligne et reliées par une ligne lumineuse. `icon` est
 * le glyphe affiché sur la sphère elle-même.
 *
 * Chaque compétence, dans le panneau de détail, porte son vrai logo (Simple
 * Icons) dans sa couleur de marque, calibrée pour rester lisible sur fond
 * sombre ; les notions sans logo (BEM, API REST, accessibilité…) utilisent
 * une icône Lucide dans la couleur de leur univers.
 */
export const SKILL_GROUPS = [
  {
    id: 'front',
    name: 'Front-end',
    color: 'var(--color-primary)',
    icon: Code2,
    description:
      "Construire l'interface : structure, style, gestion d'état et outil de build.",
    skills: [
      { name: 'React', Icon: SiReact, color: '#61DAFB', projects: ['cordees', 'argentbank'] },
      { name: 'JavaScript (ES6+)', Icon: SiJavascript, color: '#F7DF1E', projects: ['cordees', 'argentbank', 'nina-carducci'] },
      { name: 'HTML5', Icon: SiHtml5, color: '#E34F26', projects: ['cordees', 'argentbank', 'nina-carducci'] },
      { name: 'CSS3', Icon: SiCss, color: '#3C9CD7', projects: ['argentbank', 'nina-carducci'] },
      { name: 'SCSS', Icon: SiSass, color: '#CF6E9C', projects: ['cordees'] },
      { name: 'Redux Toolkit', Icon: SiRedux, color: '#A984E0', projects: ['argentbank'] },
      { name: 'Vite', Icon: SiVite, color: '#9A8CFF', projects: ['cordees'] },
    ],
  },
  {
    id: 'back',
    name: 'Back-end',
    color: 'var(--color-amber)',
    icon: Server,
    description:
      'Servir les données : API REST, base de données, authentification et documentation.',
    skills: [
      { name: 'Node.js', Icon: SiNodedotjs, color: '#7DC960', projects: ['cordees', 'argentbank'] },
      { name: 'Express', Icon: SiExpress, color: '#E7E8F2', projects: ['argentbank'] },
      { name: 'MongoDB', Icon: SiMongodb, color: '#4CB050', projects: ['argentbank'] },
      { name: 'API REST', Icon: Webhook, color: 'var(--color-amber)', projects: ['argentbank'] },
      { name: 'JWT', Icon: SiJsonwebtokens, color: '#E7E8F2', projects: ['argentbank'] },
      { name: 'Swagger / OpenAPI', Icon: SiSwagger, color: '#85EA2D', projects: ['argentbank'] },
    ],
  },
  {
    id: 'tools',
    name: 'Outils',
    color: 'var(--color-champagne)',
    icon: Wrench,
    description:
      'Versionner, déployer, mesurer et cadrer le travail au quotidien.',
    skills: [
      { name: 'Git', Icon: SiGit, color: '#F05033', projects: ['cordees', 'argentbank', 'nina-carducci'] },
      { name: 'GitHub', Icon: SiGithub, color: '#E7E8F2', projects: ['argentbank', 'nina-carducci'] },
      { name: 'Netlify', Icon: SiNetlify, color: '#32E0D6', projects: ['cordees', 'argentbank', 'nina-carducci'] },
      { name: 'OVH', Icon: SiOvh, color: '#5B6EF0', projects: ['cordees'] },
      { name: 'Figma', Icon: SiFigma, color: '#F5764C', projects: ['argentbank', 'nina-carducci'] },
      { name: 'Lighthouse', Icon: SiLighthouse, color: '#F5A623', projects: ['nina-carducci'] },
      { name: 'ESLint', Icon: SiEslint, color: '#8A7BEA', projects: ['cordees', 'argentbank', 'nina-carducci'] },
      { name: 'Prettier', Icon: SiPrettier, color: '#F0C860', projects: ['cordees', 'argentbank', 'nina-carducci'] },
    ],
  },
  {
    id: 'spec',
    name: 'Spécialités',
    color: 'var(--color-bronze)',
    icon: ShieldCheck,
    description:
      'Ce que je surveille sur chaque projet, du premier commit à la mise en ligne.',
    skills: [
      { name: 'Accessibilité (WCAG AA)', Icon: Accessibility, color: 'var(--color-bronze)', projects: ['cordees', 'nina-carducci'] },
      { name: 'SEO technique', Icon: Search, color: 'var(--color-bronze)', projects: ['cordees', 'nina-carducci'] },
      { name: 'Sécurité web', Icon: ShieldCheck, color: 'var(--color-bronze)', projects: ['cordees', 'argentbank'] },
      { name: 'RGPD / CNIL', Icon: Lock, color: 'var(--color-bronze)', projects: ['cordees'] },
      { name: 'Performance', Icon: Gauge, color: 'var(--color-bronze)', projects: ['cordees', 'nina-carducci'] },
    ],
  },
]
