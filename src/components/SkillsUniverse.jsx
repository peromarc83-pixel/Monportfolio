import { UNIVERSES } from '@/data/skills.js'
import './SkillsUniverse.css'

/**
 * Section « Compétences » : les 4 domaines réduits au texte — nom coloré,
 * description, technos en liste. Pas de carte. La photo de fond est portée
 * par la section parente (Skills.jsx).
 */
function SkillsUniverse() {
  return (
    <ul className="su" role="list" aria-label="Compétences par domaine">
      {UNIVERSES.map((universe) => (
        <li key={universe.id} className="su__uni" style={{ '--hue': universe.color }}>
          <h3 className="su__uni-name">{universe.name}</h3>
          <p className="su__uni-desc">{universe.description}</p>
          <ul className="su__uni-skills">
            {universe.skills.map((skill) => (
              <li key={skill.name}>{skill.name}</li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  )
}

export default SkillsUniverse
