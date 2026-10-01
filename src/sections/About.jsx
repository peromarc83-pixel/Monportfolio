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
                Je m’appelle Marc Pero.J’ai passé plusieurs années dans l’assurance, à analyser des dossiers et à
                évaluer des risques. Puis j’ai eu envie de me reconvertir dans le développement
                web. J’ai gardé de cette expérience le réflexe de bien comprendre un besoin
                avant d’agir.
              </p>
              <p>
                Ce qui me plaît dans le développement, c’est la diversité des missions :
                travailler sur le design d’un site, améliorer ses performances ou sa
                visibilité. Mais j’aime particulièrement construire des produits utiles et
                agréables à utiliser.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
