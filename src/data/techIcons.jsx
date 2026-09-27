// Icônes de la stack, partagées entre le Hero (rangée statique) et le Loader
// (orbite). Pour ajouter/retirer une techno : cf. TECHS.

const IconReact = () => (
  <svg viewBox="-11 -11 22 22" aria-hidden="true">
    <circle r="2" fill="#61DAFB" />
    <g fill="none" stroke="#61DAFB" strokeWidth="1">
      <ellipse rx="10" ry="4.2" />
      <ellipse rx="10" ry="4.2" transform="rotate(60)" />
      <ellipse rx="10" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
)
const IconJS = () => (
  <svg viewBox="0 0 32 32" aria-hidden="true">
    <rect width="32" height="32" rx="5" fill="#F7DF1E" />
    <text x="16" y="23" textAnchor="middle" fontWeight="700" fontSize="15" fill="#0A0A0B">
      JS
    </text>
  </svg>
)
const IconNode = () => (
  <svg viewBox="0 0 32 32" aria-hidden="true">
    <path d="M16 2 28 9 28 23 16 30 4 23 4 9Z" fill="#539E43" />
    <text x="16" y="20" textAnchor="middle" fontWeight="700" fontSize="8.5" fill="#fff">
      node
    </text>
  </svg>
)
const IconExpress = () => (
  <svg viewBox="0 0 32 32" aria-hidden="true">
    <rect width="32" height="32" rx="5" fill="#1a1a1a" stroke="#444" strokeWidth="1" />
    <text x="16" y="21" textAnchor="middle" fontWeight="700" fontSize="12" fill="#fff">
      EX
    </text>
  </svg>
)
const IconMongo = () => (
  <svg viewBox="0 0 32 32" aria-hidden="true">
    <path d="M16 3c3 5 6 8 6 13 0 6-4 9-6 10-2-1-6-4-6-10 0-5 3-8 6-13z" fill="#47A248" />
    <path d="M16 6v22" stroke="#2f7d33" strokeWidth="1.2" />
  </svg>
)
const IconRedux = () => (
  <svg viewBox="0 0 32 32" aria-hidden="true">
    <rect width="32" height="32" rx="5" fill="#764ABC" />
    <text x="16" y="21" textAnchor="middle" fontWeight="700" fontSize="11" fill="#fff">
      RDX
    </text>
  </svg>
)
const IconCSS = () => (
  <svg viewBox="0 0 32 32" aria-hidden="true">
    <path d="M6 3h20l-1.8 21L16 27 8 24 6 3z" fill="#1572B6" />
    <path d="M16 5.5v19l6.3-2 1.4-16.9z" fill="#33A9DC" />
    <text x="16" y="19" textAnchor="middle" fontWeight="700" fontSize="11" fill="#fff">
      3
    </text>
  </svg>
)
const IconHTML = () => (
  <svg viewBox="0 0 32 32" aria-hidden="true">
    <path d="M6 3h20l-1.8 21L16 27 8 24 6 3z" fill="#E34F26" />
    <path d="M16 5.5v19l6.3-2 1.4-16.9z" fill="#EF652A" />
    <text x="16" y="19" textAnchor="middle" fontWeight="700" fontSize="11" fill="#fff">
      5
    </text>
  </svg>
)

// Reprend la stack déclarée dans src/data/skills.js (univers front + back)
export const TECHS = [
  { name: 'React', Icon: IconReact },
  { name: 'JavaScript', Icon: IconJS },
  { name: 'Node.js', Icon: IconNode },
  { name: 'Express', Icon: IconExpress },
  { name: 'MongoDB', Icon: IconMongo },
  { name: 'Redux', Icon: IconRedux },
  { name: 'CSS3', Icon: IconCSS },
  { name: 'HTML5', Icon: IconHTML },
]
