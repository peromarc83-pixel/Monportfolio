import SectionTitle from '@/components/SectionTitle.jsx'
import TimelineItem from '@/components/TimelineItem.jsx'
import './Journey.css'

const STEPS = [
  {
    year: '1990 — 2021',
    title: 'Assurance & management',
    description:
      "Gestionnaire de sinistres, conseiller clientèle, puis directeur d’agence pendant 14 ans, j’ai travaillé dans des domaines variés : analyse des risques, tarification et encadrement d’équipe. Ces responsabilités m’ont appris à prendre des décisions réfléchies, parfois dans l’urgence. Cette expérience nourrit aujourd’hui ma façon d’aborder le développement.",
    color: 'var(--color-bronze-deep)',
  },
  {
    year: '2025',
    title: 'Formation développeur web',
    description:
      'J’ai entamé une reconversion complète dans le développement web. J’ai découvert et appris à utiliser des technologies et des outils qui m’étaient jusque-là inconnus : HTML, CSS, JavaScript, React, Node.js et Express font désormais partie de mon quotidien. En réalisant une dizaine de projets, du cahier des charges au déploiement, j’ai pu mettre ces connaissances en pratique.',
    color: 'var(--color-primary-strong)',
  },
  {
    year: '2026 — aujourd\'hui',
    title: 'Premier client réel',
    description:
      "Au cours de ma formation, j’ai eu l’occasion et le plaisir de créer de bout en bout un site vitrine pour un ami. Le projet est parti d’une simple page HTML. J’ai ensuite travaillé sur son identité visuelle, développé le site, abordé les questions de sécurité et de conformité réglementaire, puis l’ai mis en ligne. Ce projet m’a permis de découvrir le plaisir de travailler pour un client réel, avec des besoins et des attentes concrètes.",
    color: 'var(--color-gold-light)',
  },
]

function Journey() {
  return (
    <section id="parcours" className="journey section">
      <div className="container">
        <SectionTitle eyebrow="Parcours" id="parcours-title" />
        <div className="journey__rail">
          <div className="journey__dots" aria-hidden="true">
            {STEPS.map((step) => (
              <span key={step.title} className="journey__dot" style={{ '--dot': step.color }} />
            ))}
          </div>
          <ol className="journey__list">
            {STEPS.map((step, index) => (
              <TimelineItem
                key={step.title}
                {...step}
                isLast={index === STEPS.length - 1}
              />
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

export default Journey
