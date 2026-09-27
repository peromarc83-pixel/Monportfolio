import { useEffect, useRef, useState } from 'react'
import { TECHS } from '@/data/techIcons.jsx'
import './Loader.css'

// Doit rester cohérent avec les délais/durées déclarés dans Loader.css
const FULL_DURATION = 3450
const REDUCED_DURATION = 300
const PROGRESS_START = 1100
const PROGRESS_DURATION = 1400

const LETTERS = ['M', 'a', 'r', 'c', '.']

function easeOutCubic(t) {
  return 1 - (1 - t) ** 3
}

function Loader() {
  const [visible, setVisible] = useState(true)
  const fillRef = useRef(null)
  const percentRef = useRef(null)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let progressStartTimer
    let frame

    if (reduced) {
      if (fillRef.current) fillRef.current.style.width = '100%'
      if (percentRef.current) percentRef.current.textContent = '100%'
    } else {
      const animateProgress = (start) => {
        const t = Math.min(1, (performance.now() - start) / PROGRESS_DURATION)
        const value = Math.round(easeOutCubic(t) * 100)
        if (fillRef.current) fillRef.current.style.width = value + '%'
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
  }, [])

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
                  style={{ '--angle': `${i * 45}deg`, animationDelay: `${i * 60}ms` }}
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
