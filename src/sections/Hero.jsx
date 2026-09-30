import { FaGithub } from 'react-icons/fa6'
import { Download } from 'lucide-react'
import Button from '@/components/Button.jsx'
import { TECHS } from '@/data/techIcons.jsx'
import './Hero.css'

/**
 * Hero du site. La stack technique est affichée en une simple rangée d'icônes
 * sous le contenu. Pour ajouter/retirer une techno : cf. src/data/techIcons.jsx.
 */

function Hero() {
  return (
    <section id="accueil" className="hero section">
      <img
        className="hero__bg"
        src="/images/hero-circuit.webp"
        alt=""
        aria-hidden="true"
      />
      <div className="hero__veil" aria-hidden="true"></div>

      <div className="container hero__inner">
        <div className="hero__text">
          <h1 className="hero__title">
            Marc<span className="hero__title-dot">.</span>
            <span className="sr-only"> — Développeur front-end React, en formation full-stack</span>
          </h1>
          <p className="hero__role">
            Développeur front-end <em>React</em>
          </p>
          <p className="hero__tagline">
          Développeur web orienté front-end, avec des bases solides en back-end qui me permettent de mener un projet du prototype à la mise en ligne. Mon objectif : des interfaces claires, accessibles et performantes.
          </p>
          <div className="hero__actions">
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

          <div className="hero__stack" aria-hidden="true">
            {TECHS.map((tech) => (
              <span className="hero__icon" key={tech.name} title={tech.name}>
                <tech.Icon />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
