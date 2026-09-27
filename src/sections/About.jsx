import SectionTitle from '@/components/SectionTitle.jsx'
import './About.css'

function About() {
  return (
    <section id="a-propos" className="about section">
      <div className="container about__inner">
        <SectionTitle eyebrow="À propos" title="Qui suis-je ?" id="a-propos-title" />

        <div className="about__layout">
          <div className="about__portrait">
            <div className="about__photo">
              <img
                src="/images/marc-portrait.webp"
                width="600"
                height="600"
                alt="Portrait de Marc Pero"
                loading="lazy"
                decoding="async"
              />
            </div>
            <p className="about__signature" aria-hidden="true">Marc Pero</p>
          </div>

          <div className="about__content">
            <div className="about__body">
              <p>
                J’ai passé plusieurs années dans l’assurance, à analyser des dossiers et
                évaluer des risques, avant de me reconvertir dans le développement web. J’en
                garde le réflexe de bien comprendre un problème avant de coder, au service
                d’interfaces claires et accessibles.
              </p>
              <p>
                Ce qui me plaît dans le développement, c’est justement cette diversité : une
                animation CSS un jour, une API à optimiser le lendemain, un score Lighthouse à
                améliorer la semaine suivante. Le fil conducteur reste le même — construire des
                produits bien pensés, utiles, prêts pour de vrais utilisateurs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
