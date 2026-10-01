import SectionTitle from '@/components/SectionTitle.jsx'
import ProjectShowcase from '@/components/ProjectShowcase.jsx'
import { projects } from '@/data/projects.js'
import './Projects.css'

const GROUPS = [
  { type: 'client', title: 'Mission client' },
  { type: 'formation', title: 'Projets de formation' },
]

function Projects() {
  return (
    <section id="projets" className="projects section">
      <div className="container">
        <SectionTitle
          eyebrow="Projets"
          id="projets-title"
        />

        <div className="projects__groups">
          {GROUPS.map((group) => {
            const items = projects.filter((project) => project.type === group.type)
            if (items.length === 0) return null
            return (
              <div key={group.type} className="projects__group">
                <h3 id={`projets-${group.type}`} className="projects__group-title">
                  {group.title}
                </h3>
                <ProjectShowcase
                  projects={items}
                  featured={group.type === 'client'}
                  labelledBy={`projets-${group.type}`}
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects
