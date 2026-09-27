import { FaGithub } from 'react-icons/fa6'
import { Download } from 'lucide-react'
import Button from '@/components/Button.jsx'
import { TECHS } from '@/data/techIcons.jsx'
import './HeroConstellation.css'

/**
 * Hero du site. La stack technique est affichée en une simple rangée d'icônes
 * sous le contenu. Pour ajouter/retirer une techno : cf. src/data/techIcons.jsx.
 */

function HeroConstellation() {
  return (
    <section id="accueil" className="hero-constellation section">
      <img
        className="hero-constellation__bg"
        src="/images/hero-circuit.webp"
        alt=""
        aria-hidden="true"
      />
      <div className="hero-constellation__veil" aria-hidden="true"></div>

      <div className="container hero-constellation__inner">
        <div className="hero-constellation__text">
          <h1 className="hero-constellation__title">
            Marc<span className="hero-constellation__title-dot">.</span>
          </h1>
          <p className="hero-constellation__role">Développeur front-end React</p>
          <p className="hero-constellation__tagline">
          Développeur web orienté front-end, avec des bases solides en back-end qui me permettent de mener un projet du prototype à la mise en ligne. Mon objectif : des interfaces claires, accessibles et performantes.
          </p>
          <div className="hero-constellation__actions">
            <Button href="#contact" variant="gold">
              Me contacter
            </Button>
            <Button href="https://github.com/peromarc83-pixel" variant="ghost">
              <FaGithub aria-hidden="true" size={16} />
              GitHub
            </Button>
            <Button href="/cv-marc.pdf" variant="ghost">
              <Download aria-hidden="true" size={16} />
              Mon CV
            </Button>
          </div>

          <p className="sr-only">
            Stack&nbsp;: {TECHS.map((tech) => tech.name).join(', ')}.
          </p>

          <div className="hero-constellation__stack" aria-hidden="true">
            {TECHS.map((tech) => (
              <span className="hero-constellation__icon" key={tech.name} title={tech.name}>
                <tech.Icon />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroConstellation
