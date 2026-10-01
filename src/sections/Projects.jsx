import SectionTitle from '@/components/SectionTitle.jsx'
import ProjectShowcase from '@/components/ProjectShowcase.jsx'
import { projects } from '@/data/projects.js'
import './Projects.css'

function Projects() {
  return (
    <section id="projets" className="projects section">
      <div className="container">
        <SectionTitle eyebrow="Projets" id="projets-title" />
        <ProjectShowcase projects={projects} />
      </div>
    </section>
  )
}

export default Projects
