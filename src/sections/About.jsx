import SectionTitle from '@/components/SectionTitle.jsx'
import './About.css'

function About() {
  return (
    <section id="a-propos" className="about section">
      <div className="container about__inner">
        <SectionTitle eyebrow="À propos" id="a-propos-title" />

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
          </div>

          <div className="about__content">
            <div className="about__body">
              <p>
               Avant le développement web, j’ai travaillé 31 ans dans l’assurance, dont 14 ans comme directeur d’agence. J’y ai appris à analyser une situation et à clarifier un besoin avant de décider. Aujourd’hui, je retrouve cette démarche dans les projets web.
              </p>
              <p>
                Ce qui me plaît dans le développement, c’est la variété du travail : on passe de la
                compréhension d’une demande à l’optimisation d’une page, parfois dans la même journée.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
