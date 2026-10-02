import { useEffect, useState } from 'react'
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { FaGithub } from 'react-icons/fa6'
import Button from '@/components/Button.jsx'
import './ProjectShowcase.css'

const KIND_LABELS = {
  client: { long: 'Mission client', short: 'Client' },
  formation: { long: 'Projet de formation', short: 'Formation' },
}

const HASH_PREFIX = '#projet-'

function Shot({ image, title, className, sizes, lazy = false, alt = '' }) {
  const [error, setError] = useState(false)
  if (error || !image) {
    return (
      <span className={`${className} showcase__fallback`} aria-hidden="true">
        {title.slice(0, 2).toUpperCase()}
      </span>
    )
  }
  return (
    <img
      className={className}
      src={image}
      srcSet={['400', '800', '1200']
        .map((w) => `${image.replace('.webp', `-${w}.webp`)} ${w}w`)
        .concat(`${image} 1600w`)
        .join(', ')}
      sizes={sizes}
      alt={alt}
      loading={lazy ? 'lazy' : undefined}
      onError={() => setError(true)}
    />
  )
}

function indexFromHash(projects) {
  if (!window.location.hash.startsWith(HASH_PREFIX)) return -1
  const id = window.location.hash.slice(HASH_PREFIX.length)
  return projects.findIndex((project) => project.id === id)
}

function ProjectShowcase({ projects }) {
  const [current, setCurrent] = useState(() => Math.max(indexFromHash(projects), 0))

  useEffect(() => {
    const handleHash = () => {
      const index = indexFromHash(projects)
      if (index >= 0) setCurrent(index)
    }
    window.addEventListener('hashchange', handleHash)
    return () => window.removeEventListener('hashchange', handleHash)
  }, [projects])

  const select = (index) => {
    const next = (index + projects.length) % projects.length
    setCurrent(next)
    window.history.replaceState(null, '', `${HASH_PREFIX}${projects[next].id}`)
  }

  const project = projects[current]
  const kind = KIND_LABELS[project.type]

  return (
    <div className="showcase">
      <div className="showcase__picker">
        <button
          type="button"
          className="showcase__arrow"
          aria-label="Projet précédent"
          onClick={() => select(current - 1)}
        >
          <ChevronLeft aria-hidden="true" size={18} />
        </button>

        <ul className="showcase__thumbs" aria-label="Choisir un projet">
          {projects.map((item, index) => (
            <li key={item.id} id={`projet-${item.id}`} className="showcase__thumb-item">
              <button
                type="button"
                className="showcase__thumb"
                aria-pressed={index === current}
                aria-controls="projet-detail"
                onClick={() => select(index)}
              >
                <Shot
                  image={item.image}
                  title={item.title}
                  className="showcase__thumb-img"
                  sizes="(min-width: 760px) 340px, 72vw"
                  lazy
                />
                <span className="showcase__thumb-label">
                  {item.title}
                  <small>{KIND_LABELS[item.type].short}</small>
                </span>
              </button>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="showcase__arrow"
          aria-label="Projet suivant"
          onClick={() => select(current + 1)}
        >
          <ChevronRight aria-hidden="true" size={18} />
        </button>
      </div>

      <article key={project.id} id="projet-detail" className="showcase__detail">
        <p className="showcase__kind">{kind.long}</p>
        <h3 className="showcase__title">{project.title}</h3>

        <ul className="showcase__stack" aria-label="Technologies">
          {project.stack.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>

        {(project.links?.demo || project.links?.code) && (
          <div className="showcase__links">
            {project.links.demo && (
              <Button
                href={project.links.demo}
                variant="gold"
                aria-label={`Visiter le site ${project.title}`}
              >
                Visiter le site
                <ArrowUpRight aria-hidden="true" size={16} />
              </Button>
            )}
            {project.links.code && (
              <Button
                href={project.links.code}
                variant="ghost"
                aria-label={`Code source de ${project.title}`}
              >
                <FaGithub aria-hidden="true" size={16} />
                Code source
                <ArrowUpRight aria-hidden="true" size={16} />
              </Button>
            )}
          </div>
        )}

        <div className="showcase__shot">
          <Shot
            image={project.image}
            title={project.title}
            className="showcase__shot-img"
            sizes="(min-width: 1060px) 980px, 100vw"
            alt={`Capture d’écran du site ${project.title}`}
          />
        </div>

        <div className="showcase__body">
          <p className="showcase__summary">{project.summary}</p>

          {project.metrics?.length > 0 ? (
            <div className="showcase__facts">
              {project.metricsCaption && (
                <p className="showcase__facts-caption">{project.metricsCaption}</p>
              )}
              <dl>
                {project.metrics.map((metric) => (
                  <div key={metric.label}>
                    <dt>{metric.label}</dt>
                    <dd>
                      {metric.before && (
                        <>
                          <span className="showcase__before">{metric.before}</span>
                          {' → '}
                        </>
                      )}
                      <span className="showcase__after">{metric.after}</span>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          ) : (
            project.context?.length > 0 && (
              <div className="showcase__facts">
                <dl>
                  {project.context.map((item) => (
                    <div key={item.label}>
                      <dt>{item.label}</dt>
                      <dd>{item.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            )
          )}
        </div>
      </article>
    </div>
  )
}

export default ProjectShowcase
