import SectionTitle from '@/components/SectionTitle.jsx'
import SkillGroups from '@/components/SkillGroups.jsx'
import './Skills.css'

function Skills() {
  return (
    <section id="competences" className="skills section">
      <div className="container">
        <SectionTitle
          eyebrow="Compétences"
          title="De l'interface au déploiement"
          subtitle="Surtout du front-end React, avec des bases côté back-end, et le souci de l'accessibilité, de la performance et de la sécurité."
          id="competences-title"
        />
        <SkillGroups />
      </div>
    </section>
  )
}

export default Skills
