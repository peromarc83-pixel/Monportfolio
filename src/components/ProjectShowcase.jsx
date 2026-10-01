import { useState } from 'react'
import { ExternalLink } from 'lucide-react'
import { FaGithub } from 'react-icons/fa6'
import Button from '@/components/Button.jsx'
import './ProjectShowcase.css'

function CardImage({ image, title, sizes }) {
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
      srcSet={`${image.replace('.webp', '-800.webp')} 800w, ${image} 1600w`}
      sizes={sizes}
      alt=""
      aria-hidden="true"
      loading="lazy"
      onError={() => setError(true)}
    />
  )
}

const SIZES = {
  featured: '(min-width: 860px) 55vw, 100vw',
  grid: '(min-width: 600px) 50vw, 100vw',
}

function ProjectShowcase({ projects, featured = false, labelledBy }) {
  return (
    <ul
      className={`project-grid${featured ? ' project-grid--featured' : ''}`}
      aria-labelledby={labelledBy}
    >
      {projects.map((project) => (
        <li
          key={project.id}
          id={`projet-${project.id}`}
          className={`project-card${featured ? ' project-card--featured' : ''}`}
        >
          <CardImage
            image={project.image}
            title={project.title}
            sizes={featured ? SIZES.featured : SIZES.grid}
          />

          <div className="project-card__body">
            {project.type === 'client' && (
              <span className="project-card__badge">Projet client</span>
            )}
            <h4 className="project-card__title">{project.title}</h4>

            {project.context?.length > 0 && (
              <dl className="project-card__context">
                {project.context.map((item) => (
                  <div key={item.label}>
                    <dt>{item.label}</dt>
                    <dd>{item.value}</dd>
                  </div>
                ))}
              </dl>
            )}

            <p className="project-card__summary">{project.summary}</p>

            <div className="project-card__tech">
              {project.stack?.length > 0 && (
                <ul className="project-card__stack">
                  {project.stack.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              )}

              {project.metrics?.length > 0 && (
                <ul className="project-card__metrics">
                  {project.metrics.map((metric) => (
                    <li key={metric.label}>
                      <b>{metric.value}</b>
                      <span>{metric.label}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

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
