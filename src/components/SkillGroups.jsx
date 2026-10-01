import { useEffect, useRef, useState } from 'react'
import { SKILL_GROUPS } from '@/data/skills.js'
import { projects } from '@/data/projects.js'
import './SkillGroups.css'

const PROJECTS_BY_ID = Object.fromEntries(projects.map((project) => [project.id, project]))

const TYPE_LABELS = {
  client: 'Client',
  formation: 'Formation',
}

/**
 * Section « Compétences » : les 4 domaines réduits au texte — nom coloré,
 * description, technos en liste. Pas de carte. La photo de fond est portée
 * par la section parente (Skills.jsx).
 */
function SkillGroups() {
  const [openSkill, setOpenSkill] = useState(null)
  const rootRef = useRef(null)

  useEffect(() => {
    if (!openSkill) return undefined
    const handlePointer = (event) => {
      if (!rootRef.current?.contains(event.target)) setOpenSkill(null)
    }
    const handleKey = (event) => {
      if (event.key === 'Escape') setOpenSkill(null)
    }
    document.addEventListener('pointerdown', handlePointer)
    document.addEventListener('keydown', handleKey)
    return () => {
      document.removeEventListener('pointerdown', handlePointer)
      document.removeEventListener('keydown', handleKey)
    }
  }, [openSkill])

  return (
    <ul ref={rootRef} className="skill-groups" role="list" aria-label="Compétences par domaine">
      {SKILL_GROUPS.map((group) => (
        <li key={group.id} className="skill-groups__group" style={{ '--hue': group.color }}>
          <h3 className="skill-groups__name">{group.name}</h3>
          <p className="skill-groups__desc">{group.description}</p>
          <ul className="skill-groups__skills">
            {group.skills.map((skill) => {
              const used = (skill.projects ?? []).map((id) => PROJECTS_BY_ID[id]).filter(Boolean)
              if (used.length === 0) {
                return (
                  <li key={skill.name}>
                    <span className="skill-groups__skill">{skill.name}</span>
                  </li>
                )
              }
              const popId = `skill-${group.id}-${skill.name.replace(/[^a-z0-9]+/gi, '-').toLowerCase()}`
              const isOpen = openSkill === popId
              return (
                <li key={skill.name} className="skill-groups__item">
                  <button
                    type="button"
                    className="skill-groups__skill skill-groups__skill--linked"
                    aria-expanded={isOpen}
                    aria-controls={popId}
                    onClick={() => setOpenSkill(isOpen ? null : popId)}
                  >
                    {skill.name}
                  </button>
                  <div id={popId} className="skill-groups__pop" data-open={isOpen}>
                    <span className="skill-groups__pop-label">
                      {used.length > 1 ? `${used.length} projets` : '1 projet'}
                    </span>
                    <ul className="skill-groups__projects">
                      {used.map((project) => (
                        <li key={project.id}>
                          <a href={`#projet-${project.id}`} onClick={() => setOpenSkill(null)}>
                            {project.title}
                          </a>
                          <span className={`skill-groups__tag skill-groups__tag--${project.type}`}>
                            {TYPE_LABELS[project.type]}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              )
            })}
          </ul>
        </li>
      ))}
    </ul>
  )
}

export default SkillGroups
