import { useState } from 'react'
import { ExternalLink } from 'lucide-react'
import { FaGithub } from 'react-icons/fa6'
import Button from '@/components/Button.jsx'
import './ProjectShowcase.css'

function CardImage({ image, title }) {
  const [error, setError] = useState(false)
  if (error || !image) {
    return (
      <span className="project-card__shot project-card__shot--fallback" aria-hidden="true">
        {title.slice(0, 2).toUpperCase()}
      </span>
    )
  }
  return (
    <img
      className="project-card__shot"
      src={image}
      alt=""
      aria-hidden="true"
      loading="lazy"
      onError={() => setError(true)}
    />
  )
}

function ProjectShowcase({ projects }) {
  return (
    <ul className="project-grid">
      {projects.map((project) => (
        <li key={project.id} className="project-card">
          <CardImage image={project.image} title={project.title} />

          <div className="project-card__body">
            <h3 className="project-card__title">{project.title}</h3>
            <p className="project-card__subtitle">{project.subtitle}</p>

            {(project.links?.demo || project.links?.code) && (
              <div className="project-card__links">
                {project.links.demo && (
                  <Button
                    href={project.links.demo}
                    variant="primary"
                    className="project-card__link-btn"
                    aria-label={`Visiter le site — ${project.title}`}
                  >
                    <ExternalLink aria-hidden="true" size={16} />
                    Visiter le site
                  </Button>
                )}
                {project.links.code && (
                  <Button
                    href={project.links.code}
                    variant="ghost"
                    className="project-card__link-btn"
                    aria-label={`Code source — ${project.title}`}
                  >
                    <FaGithub aria-hidden="true" size={16} />
                    Code
                  </Button>
                )}
              </div>
            )}
          </div>
        </li>
      ))}
    </ul>
  )
}

export default ProjectShowcase
