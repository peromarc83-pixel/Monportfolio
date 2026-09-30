import { useEffect, useRef, useState } from 'react'
import { TECHS } from '@/data/techIcons.jsx'
import './Loader.css'

// Doit rester cohérent avec les délais/durées déclarés dans Loader.css
const FULL_DURATION = 1200
const REDUCED_DURATION = 300
const PROGRESS_START = 150
const PROGRESS_DURATION = 750
const SEEN_KEY = 'intro-seen'

const LETTERS = ['M', 'a', 'r', 'c', '.']

function easeOutCubic(t) {
  return 1 - (1 - t) ** 3
}

function hasSeenIntro() {
  try {
    return sessionStorage.getItem(SEEN_KEY) === '1'
  } catch {
    return false
  }
}

function markIntroSeen() {
  try {
    sessionStorage.setItem(SEEN_KEY, '1')
  } catch {
    return
  }
}

function Loader() {
  const [showIntro] = useState(() => !hasSeenIntro())
  const [visible, setVisible] = useState(showIntro)
  const fillRef = useRef(null)
  const percentRef = useRef(null)

  useEffect(() => {
    if (!showIntro) {
      document.body.classList.add('is-loaded')
      return
    }
    markIntroSeen()

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let progressStartTimer
    let frame

    if (reduced) {
      if (fillRef.current) fillRef.current.style.transform = 'scaleX(1)'
      if (percentRef.current) percentRef.current.textContent = '100%'
    } else {
      const animateProgress = (start) => {
        const t = Math.min(1, (performance.now() - start) / PROGRESS_DURATION)
        const value = Math.round(easeOutCubic(t) * 100)
        if (fillRef.current) fillRef.current.style.transform = `scaleX(${value / 100})`
        if (percentRef.current) percentRef.current.textContent = value + '%'
        if (t < 1) frame = requestAnimationFrame(() => animateProgress(start))
      }
      progressStartTimer = setTimeout(() => {
        frame = requestAnimationFrame(() => animateProgress(performance.now()))
      }, PROGRESS_START)
    }

    const duration = reduced ? REDUCED_DURATION : FULL_DURATION
    document.body.style.overflow = 'hidden'
    const endTimer = setTimeout(() => {
      document.body.style.overflow = ''
      document.body.classList.add('is-loaded')
      setVisible(false)
    }, duration)

    return () => {
      clearTimeout(endTimer)
      clearTimeout(progressStartTimer)
      cancelAnimationFrame(frame)
      document.body.style.overflow = ''
    }
  }, [showIntro])

  if (!visible) return null

  return (
    <div className="loader" aria-hidden="true">
      <div className="loader__orbit-zone">
        <div className="loader__orbit">
          {TECHS.map((tech, i) => (
            <div
              className="loader__orbit-item"
              style={{ '--angle': `${i * 45}deg` }}
              key={tech.name}
            >
              <span className="loader__orbit-icon-wrap">
                <span
                  className="loader__orbit-icon"
                  style={{ '--angle': `${i * 45}deg`, animationDelay: `${i * 40}ms` }}
                >
                  <tech.Icon />
                </span>
              </span>
            </div>
          ))}
        </div>
        <p className="loader__word">
          {LETTERS.map((letter, i) => (
            <span className="loader__letter" key={i}>
              {letter}
            </span>
          ))}
        </p>
      </div>

      <div className="loader__progress">
        <span className="loader__bar">
          <span className="loader__bar-fill" ref={fillRef} />
        </span>
        <span className="loader__percent" ref={percentRef}>
          0%
        </span>
      </div>
    </div>
  )
}

export default Loader
