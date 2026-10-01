import './SectionTitle.css'

function SectionTitle({ eyebrow, subtitle, id }) {
  return (
    <div className="section-title">
      <h2 id={id} className="section-title__eyebrow">
        {eyebrow}
      </h2>
      {subtitle && <p className="section-title__subtitle">{subtitle}</p>}
    </div>
  )
}

export default SectionTitle
