import SectionTitle from '@/components/SectionTitle.jsx'
import TimelineItem from '@/components/TimelineItem.jsx'
import './Journey.css'

const STEPS = [
  {
    year: '1990 - 2021',
    title: 'Assurance & management',
    description:
      "Gestionnaire de sinistres, conseiller clientèle, puis directeur d’agence, j’ai travaillé dans des domaines variés : analyse des risques, tarification et encadrement d’équipe. Ces responsabilités m’ont appris à prendre des décisions réfléchies, parfois dans l’urgence. Cette expérience m'a montré l'importance d'aborder les projets avec rigueur.",
  },
  {
    year: '2025',
    title: 'Formation développeur web',
    description:
      "J’ai entamé une reconversion complète dans le développement web. J’ai découvert et appris à utiliser des technologies et des outils qui m’étaient jusque-là inconnus : HTML, CSS, JavaScript, React, Node.js et Express font désormais partie de mon quotidien. J'ai réalisé différents projets durant la formation, du cahier des charges au déploiement, et j’ai pu ainsi mettre ces connaissances en pratique.",
  },
  {
    year: '2026 - aujourd\'hui',
    title: 'Premier client réel',
    description:
      "Au cours de ma formation, j’ai créé un site vitrine pour un ami. Le projet est parti d’une simple page HTML. J’ai ensuite travaillé sur son identité visuelle, développé le site, abordé les questions de sécurité et de conformité réglementaire, puis l’ai mis en ligne.",
  },
]

function Journey() {
  return (
    <section id="parcours" className="journey section">
      <div className="container">
        <SectionTitle eyebrow="Parcours" id="parcours-title" />
        <div className="journey__dots" aria-hidden="true">
          {STEPS.map((step) => (
            <span key={step.title} className="journey__dot" />
          ))}
        </div>
        <ol className="journey__list">
          {STEPS.map((step, index) => (
            <TimelineItem key={step.title} {...step} isLast={index === STEPS.length - 1} />
          ))}
        </ol>
      </div>
    </section>
  )
}

export default Journey
