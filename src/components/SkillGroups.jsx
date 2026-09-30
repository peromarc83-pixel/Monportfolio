import { SKILL_GROUPS } from '@/data/skills.js'
import './SkillGroups.css'

/**
 * Section « Compétences » : les 4 domaines réduits au texte — nom coloré,
 * description, technos en liste. Pas de carte. La photo de fond est portée
 * par la section parente (Skills.jsx).
 */
function SkillGroups() {
  return (
    <ul className="skill-groups" role="list" aria-label="Compétences par domaine">
      {SKILL_GROUPS.map((group) => (
        <li key={group.id} className="skill-groups__group" style={{ '--hue': group.color }}>
          <h3 className="skill-groups__name">{group.name}</h3>
          <p className="skill-groups__desc">{group.description}</p>
          <ul className="skill-groups__skills">
            {group.skills.map((skill) => (
              <li key={skill.name}>{skill.name}</li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  )
}

export default SkillGroups
