import SectionTitle from '@/components/SectionTitle.jsx'
import SkillGroups from '@/components/SkillGroups.jsx'
import './Skills.css'

function Skills() {
  return (
    <section id="competences" className="skills section">
      <div className="container">
        <SectionTitle
          eyebrow="Compétences"
          subtitle="Surtout du front-end React, avec des bases côté back-end."
          id="competences-title"
        />
        <p className="skills__hint">
          Survolez ou touchez une technologie pour voir les projets qui l'utilisent.
        </p>
        <SkillGroups />
      </div>
    </section>
  )
}

export default Skills
