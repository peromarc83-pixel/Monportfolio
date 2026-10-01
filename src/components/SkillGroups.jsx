import { useState } from 'react'
import { SKILL_GROUPS } from '@/data/skills.js'
import { projects } from '@/data/projects.js'
import './SkillGroups.css'

const PROJECT_NAMES = Object.fromEntries(projects.map((project) => [project.id, project.shortTitle ?? project.title]))

const ALL = 'all'

const HINT = 'Survolez ou touchez une technologie pour voir les projets qui l\'utilisent.'

const FILTERS = [
  { id: ALL, name: 'Tout', description: '' },
  ...SKILL_GROUPS.map(({ id, name, description }) => ({ id, name, description })),
]

const ALL_SKILLS = SKILL_GROUPS.flatMap((group) =>
  group.skills.map((skill) => ({
    ...skill,
    group: group.id,
    usedIn: (skill.projects ?? []).map((projectId) => PROJECT_NAMES[projectId]).filter(Boolean),
  })),
)

function SkillLogo({ skill }) {
  if (skill.logo) {
    return <img src={skill.logo} alt="" width="34" height="34" />
  }
  const { Icon } = skill
  return <Icon aria-hidden="true" style={{ color: skill.color }} />
}

function SkillGroups() {
  const [active, setActive] = useState(ALL)
  const [hovered, setHovered] = useState(null)
  const [pinned, setPinned] = useState(null)

  const filter = FILTERS.find((item) => item.id === active)
  const visible = active === ALL ? ALL_SKILLS : ALL_SKILLS.filter((skill) => skill.group === active)
  const shown = ALL_SKILLS.find((skill) => skill.name === (hovered ?? pinned))

  const selectFilter = (id) => {
    setActive(id)
    setPinned(null)
  }

  return (
    <div className="skill-groups">
      <p className="skill-groups__info" aria-live="polite">
        {shown?.usedIn.length > 0 ? (
          <>
            <strong>{shown.name}</strong> : utilisé dans {shown.usedIn.join(' · ')}
          </>
        ) : (
          HINT
        )}
      </p>

      <ul className="skill-groups__filters" aria-label="Filtrer par domaine">
        {FILTERS.map((item) => (
          <li key={item.id}>
            <button
              type="button"
              className="skill-groups__chip"
              aria-pressed={item.id === active}
              onClick={() => selectFilter(item.id)}
            >
              {item.name}
            </button>
          </li>
        ))}
      </ul>

      <p className="skill-groups__desc">{filter.description}</p>

      <ul className="skill-groups__grid" aria-label="Technologies">
        {visible.map((skill, index) => (
          <li
            key={`${active}-${skill.name}`}
            className="skill-groups__item"
            style={{ animationDelay: `${index * 18}ms` }}
          >
            <button
              type="button"
              className="skill-groups__skill"
              aria-pressed={pinned === skill.name}
              onMouseEnter={() => setHovered(skill.name)}
              onMouseLeave={() => setHovered(null)}
              onFocus={() => setHovered(skill.name)}
              onBlur={() => setHovered(null)}
              onClick={() => setPinned(pinned === skill.name ? null : skill.name)}
            >
              <span className="skill-groups__logo">
                <SkillLogo skill={skill} />
              </span>
              <span className="skill-groups__name">{skill.name}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SkillGroups
