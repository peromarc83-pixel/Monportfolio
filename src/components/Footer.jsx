import { useState } from 'react'
import { Mail } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa6'
import Modal from '@/components/Modal.jsx'
import './Footer.css'

const LEGAL_PAGES = {
  mentions: { title: 'Mentions légales', url: '/mentions-legales.html' },
  confidentialite: { title: 'Politique de confidentialité', url: '/confidentialite.html' },
}

function loadLegalStyles() {
  if (document.querySelector('link[href="/legal.css"]')) return
  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = '/legal.css'
  document.head.append(link)
}

// Récupère la page légale statique et n'en garde que le contenu utile : sans le
// lien "Retour au portfolio" (redondant avec le bouton de fermeture de la
// modale) ni le petit pied de page (redondant avec le vrai footer du site).
async function fetchLegalContent(url) {
  const response = await fetch(url)
  if (!response.ok) throw new Error('Échec du chargement')
  const html = await response.text()
  const page = new DOMParser().parseFromString(html, 'text/html').querySelector('.page')
  page?.querySelector('.back')?.remove()
  page?.querySelector('footer')?.remove()
  return page?.innerHTML ?? ''
}

function Footer() {
  const year = new Date().getFullYear()
  const [legal, setLegal] = useState(null) // { title, url, html: string | null }

  const openLegal = async (event, key) => {
    event.preventDefault()
    const { title, url } = LEGAL_PAGES[key]
    loadLegalStyles()
    setLegal({ title, url, html: null })
    try {
      const html = await fetchLegalContent(url)
      setLegal({ title, url, html })
    } catch {
      setLegal({ title, url, html: '<p class="footer__legal-error">Impossible de charger ce contenu.</p>' })
    }
  }

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__meta">
          <p className="footer__copy">© {year} Marc Pero, développeur front-end React</p>
          <nav className="footer__legal" aria-label="Informations légales">
            <a href={LEGAL_PAGES.mentions.url} onClick={(e) => openLegal(e, 'mentions')}>
              Mentions légales
            </a>
            <a href={LEGAL_PAGES.confidentialite.url} onClick={(e) => openLegal(e, 'confidentialite')}>
              Confidentialité
            </a>
          </nav>
        </div>
        <ul className="footer__socials" aria-label="Réseaux sociaux">
          <li>
            <a href="https://github.com/peromarc83-pixel" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub aria-hidden="true" size={20} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/marc-pero-074580292/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin aria-hidden="true" size={20} />
            </a>
          </li>
          <li>
            <a href="mailto:marc.pero.dev@gmail.com" aria-label="Envoyer un e-mail">
              <Mail aria-hidden="true" size={20} />
            </a>
          </li>
        </ul>
      </div>

      {legal && (
        <Modal title={legal.title} onClose={() => setLegal(null)}>
          {legal.html === null ? (
            <p className="footer__legal-loading">Chargement…</p>
          ) : (
            <div className="page" dangerouslySetInnerHTML={{ __html: legal.html }} />
          )}
        </Modal>
      )}
    </footer>
  )
}

export default Footer
