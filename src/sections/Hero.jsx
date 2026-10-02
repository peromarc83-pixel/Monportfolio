import { FaGithub } from 'react-icons/fa6'
import { Download } from 'lucide-react'
import Button from '@/components/Button.jsx'
import './Hero.css'

function Hero() {
  return (
    <section id="accueil" className="hero section">
      <picture>
        <source
          media="(min-width: 768px)"
          type="image/webp"
          srcSet="/images/hero-keyboard-desktop-1920.webp 1920w, /images/hero-keyboard-desktop-2560.webp 2560w, /images/hero-keyboard-desktop-3840.webp 3840w"
          sizes="100vw"
          width="3840"
          height="2160"
        />
        <img
          className="hero__photo"
          src="/images/hero-keyboard-mobile-1080.webp"
          srcSet="/images/hero-keyboard-mobile-720.webp 720w, /images/hero-keyboard-mobile-1080.webp 1080w, /images/hero-keyboard-mobile-1440.webp 1440w"
          sizes="100vw"
          width="1440"
          height="2200"
          fetchPriority="high"
          alt=""
          aria-hidden="true"
        />
      </picture>
      <span className="hero__veil" aria-hidden="true"></span>
      <div className="container hero__inner">
        <div className="hero__text">
          <h1 className="hero__title">
            <span className="hero__name">
              Marc Pero<span className="hero__dot" aria-hidden="true">.</span>
            </span>{' '}
            <span className="hero__role">
              Développeur front-end <em>React</em>
            </span>
          </h1>
          <p className="hero__tagline">
            Je conçois des sites et des applications.
            <br />
            Ma formation m’a aussi permis de découvrir les bases du <span className="hero__nowrap">back-end</span> et de la mise en ligne.
          </p>
          <div className="hero__actions">
            <Button href="#contact" variant="gold">
              Me contacter
            </Button>
            <Button href="https://github.com/peromarc83-pixel" variant="ghost">
              <FaGithub aria-hidden="true" size={16} />
              GitHub
            </Button>
            <Button href="/cv" variant="ghost" download="CV-Marc-Pero.pdf">
              <Download aria-hidden="true" size={16} />
              Télécharger mon CV
              <span className="sr-only"> (PDF, 180 Ko)</span>
            </Button>
          </div>
        </div>
      </div>
      <span className="hero__rule" aria-hidden="true"></span>
    </section>
  )
}

export default Hero
