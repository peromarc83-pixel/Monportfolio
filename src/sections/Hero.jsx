import { FaGithub } from 'react-icons/fa6'
import { Download } from 'lucide-react'
import Button from '@/components/Button.jsx'
import './Hero.css'

function Hero() {
  return (
    <section id="accueil" className="hero section">
      <img
        className="hero__photo"
        src="/images/hero-bg-1920.webp"
        srcSet="/images/hero-bg-1280.webp 1280w, /images/hero-bg-1920.webp 1920w, /images/hero-bg-2560.webp 2560w, /images/hero-bg-3840.webp 3840w"
        sizes="100vw"
        width="1920"
        height="875"
        fetchPriority="high"
        alt=""
        aria-hidden="true"
      />
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
            Ma formation m’a aussi donné des bases en <span className="hero__nowrap">back-end</span> et en déploiement.
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
