import reactLogo from '@/assets/logos/react.svg'
import javascriptLogo from '@/assets/logos/javascript.svg'
import html5Logo from '@/assets/logos/html5.svg'
import css3Logo from '@/assets/logos/css3.svg'
import sassLogo from '@/assets/logos/sass.svg'
import reduxLogo from '@/assets/logos/redux.svg'
import vitejsLogo from '@/assets/logos/vitejs.svg'
import nodejsLogo from '@/assets/logos/nodejs.svg'
import expressLogo from '@/assets/logos/express.svg'
import mongodbLogo from '@/assets/logos/mongodb.svg'
import swaggerLogo from '@/assets/logos/swagger.svg'
import gitLogo from '@/assets/logos/git.svg'
import githubLogo from '@/assets/logos/github.svg'
import netlifyLogo from '@/assets/logos/netlify.svg'
import figmaLogo from '@/assets/logos/figma.svg'
import eslintLogo from '@/assets/logos/eslint.svg'
import {
  SiJsonwebtokens,
  SiOvh,
  SiLighthouse,
  SiPrettier,
} from 'react-icons/si'
import {
  Webhook,
  Accessibility,
  Search,
  ShieldCheck,
  Lock,
  Gauge,
} from 'lucide-react'

export const SKILL_GROUPS = [
  {
    id: 'front',
    name: 'Front-end',
    description:
      'Ce que voit et utilise le visiteur.',
    skills: [
      { name: 'React', logo: reactLogo, projects: ['cordees', 'argentbank'] },
      { name: 'JavaScript (ES6+)', logo: javascriptLogo, projects: ['cordees', 'argentbank', 'nina-carducci'] },
      { name: 'HTML5', logo: html5Logo, projects: ['cordees', 'argentbank', 'nina-carducci'] },
      { name: 'CSS3', logo: css3Logo, projects: ['argentbank', 'nina-carducci'] },
      { name: 'SCSS', logo: sassLogo, projects: ['cordees'] },
      { name: 'Redux Toolkit', logo: reduxLogo, projects: ['argentbank'] },
      { name: 'Vite', logo: vitejsLogo, projects: ['cordees'] },
    ],
  },
  {
    id: 'back',
    name: 'Back-end',
    description:
      'Les données et les API derrière l’interface.',
    skills: [
      { name: 'Node.js', logo: nodejsLogo, projects: ['cordees', 'argentbank'] },
      { name: 'Express', logo: expressLogo, projects: ['argentbank'] },
      { name: 'MongoDB', logo: mongodbLogo, projects: ['argentbank'] },
      { name: 'API REST', Icon: Webhook, color: 'var(--color-amber)', projects: ['argentbank'] },
      { name: 'JWT', Icon: SiJsonwebtokens, color: '#E7E8F2', projects: ['argentbank'] },
      { name: 'Swagger / OpenAPI', logo: swaggerLogo, projects: ['argentbank'] },
    ],
  },
  {
    id: 'tools',
    name: 'Outils',
    description:
      'Pour travailler proprement et mettre en ligne.',
    skills: [
      { name: 'Git', logo: gitLogo, projects: ['cordees', 'argentbank', 'nina-carducci'] },
      { name: 'GitHub', logo: githubLogo, projects: ['argentbank', 'nina-carducci'] },
      { name: 'Netlify', logo: netlifyLogo, projects: ['cordees', 'argentbank', 'nina-carducci'] },
      { name: 'OVH', Icon: SiOvh, color: '#5B6EF0', projects: ['cordees'] },
      { name: 'Figma', logo: figmaLogo, projects: ['argentbank', 'nina-carducci'] },
      { name: 'Lighthouse', Icon: SiLighthouse, color: '#F5A623', projects: ['nina-carducci'] },
      { name: 'ESLint', logo: eslintLogo, projects: ['cordees', 'argentbank', 'nina-carducci'] },
      { name: 'Prettier', Icon: SiPrettier, color: '#F0C860', projects: ['cordees', 'argentbank', 'nina-carducci'] },
    ],
  },
  {
    id: 'spec',
    name: 'Qualité',
    description:
      'Ce que j’ai déjà mis en pratique sur mes projets.',
    skills: [
      { name: 'Accessibilité', Icon: Accessibility, color: 'var(--color-primary)', projects: ['cordees', 'nina-carducci'] },
      { name: 'Référencement', Icon: Search, color: 'var(--color-primary)', projects: ['cordees', 'nina-carducci'] },
      { name: 'Performance', Icon: Gauge, color: 'var(--color-primary)', projects: ['cordees', 'nina-carducci'] },
      { name: 'Sécurité du site', Icon: ShieldCheck, color: 'var(--color-primary)', projects: ['cordees', 'argentbank'] },
      { name: 'Conformité RGPD', Icon: Lock, color: 'var(--color-primary)', projects: ['cordees'] },
    ],
  },
]
