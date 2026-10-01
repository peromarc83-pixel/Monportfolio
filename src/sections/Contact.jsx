import { useState } from 'react'
import { Loader2, Send } from 'lucide-react'
import Button from '@/components/Button.jsx'
import SectionTitle from '@/components/SectionTitle.jsx'
import './Contact.css'

const INITIAL_FORM = { firstName: '', lastName: '', email: '', company: '', message: '', website: '' }
const NAME_MAX_LENGTH = 100
const EMAIL_MAX_LENGTH = 254
const COMPANY_MAX_LENGTH = 200
const MESSAGE_MAX_LENGTH = 5000

function validate(form) {
  const errors = {}
  if (!form.firstName.trim()) errors.firstName = 'Merci d\'indiquer votre prénom.'
  if (!form.lastName.trim()) errors.lastName = 'Merci d\'indiquer votre nom.'
  if (!form.email.trim()) {
    errors.email = 'Merci d\'indiquer votre e-mail.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Format d\'e-mail invalide.'
  }
  if (!form.message.trim()) errors.message = 'Merci d\'indiquer un message.'
  return errors
}

function Field({ id, label, required = false, error, wide = false, children }) {
  return (
    <div className={`contact__field${wide ? ' contact__field--wide' : ''}`}>
      <label htmlFor={id}>
        {label}
        {required ? (
          <span className="contact__star" aria-hidden="true"> *</span>
        ) : (
          <span className="contact__optional"> (facultatif)</span>
        )}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="contact__error">
          {error}
        </p>
      )}
    </div>
  )
}

function Contact() {
  const [form, setForm] = useState(INITIAL_FORM)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const [startedAt, setStartedAt] = useState(() => Date.now())

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const fieldProps = (name) => ({
    id: name,
    name,
    value: form[name],
    onChange: handleChange,
    'aria-invalid': Boolean(errors[name]),
    'aria-describedby': errors[name] ? `${name}-error` : undefined,
  })

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (form.website) return

    const validationErrors = validate(form)
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) return

    setStatus('sending')
    try {
      const response = await fetch('/.netlify/functions/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          company: form.company,
          message: form.message,
          startedAt,
        }),
      })
      if (!response.ok) throw new Error('Échec de l\'envoi')
      setStatus('success')
      setForm(INITIAL_FORM)
      setStartedAt(Date.now())
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="contact section">
      <div className="container contact__inner">
        <SectionTitle
          eyebrow="Contact"
          subtitle="Parlez-moi de votre projet, je réponds sous 48 h."
          id="contact-title"
        />

        <form className="contact__form" onSubmit={handleSubmit} noValidate>
          <div className="contact__honeypot" aria-hidden="true">
            <label htmlFor="website">Site web</label>
            <input
              type="text"
              id="website"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              value={form.website}
              onChange={handleChange}
            />
          </div>

          <p className="contact__required">
            Les champs marqués d&apos;un <span className="contact__star">*</span> sont obligatoires.
          </p>

          <Field id="firstName" label="Prénom" required error={errors.firstName}>
            <input
              type="text"
              required
              maxLength={NAME_MAX_LENGTH}
              autoComplete="given-name"
              {...fieldProps('firstName')}
            />
          </Field>

          <Field id="lastName" label="Nom" required error={errors.lastName}>
            <input
              type="text"
              required
              maxLength={NAME_MAX_LENGTH}
              autoComplete="family-name"
              {...fieldProps('lastName')}
            />
          </Field>

          <Field id="email" label="E-mail" required error={errors.email}>
            <input
              type="email"
              required
              maxLength={EMAIL_MAX_LENGTH}
              autoComplete="email"
              {...fieldProps('email')}
            />
          </Field>

          <Field id="company" label="Société">
            <input
              type="text"
              maxLength={COMPANY_MAX_LENGTH}
              autoComplete="organization"
              {...fieldProps('company')}
            />
          </Field>

          <Field id="message" label="Votre message" required error={errors.message} wide>
            <textarea
              rows={6}
              required
              maxLength={MESSAGE_MAX_LENGTH}
              autoComplete="off"
              placeholder="Écrivez votre message ici."
              {...fieldProps('message')}
            />
          </Field>

          <div className="contact__foot">
            <Button type="submit" variant="gold" disabled={status === 'sending'}>
              {status === 'sending' ? (
                <Loader2 aria-hidden="true" size={18} className="contact__spinner" />
              ) : (
                <Send aria-hidden="true" size={18} />
              )}
              Envoyer
            </Button>

            <p className="contact__status" role="status" aria-live="polite">
              {status === 'success' && 'Message envoyé, merci ! Je vous réponds rapidement.'}
              {status === 'error' && "Une erreur est survenue, merci de réessayer ou de m'écrire directement."}
            </p>

            <p className="contact__consent">
              En envoyant ce formulaire, vous acceptez que vos coordonnées soient utilisées
              pour répondre à votre demande.{' '}
              <a href="/confidentialite.html">En savoir plus</a>.
            </p>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
