import './TimelineItem.css'

function TimelineItem({ version, year, title, description, color, isLast = false }) {
  return (
    <li className={`timeline-item${isLast ? ' timeline-item--last' : ''}`}>
      <div className="timeline-item__head">
        <span className="timeline-item__version" style={{ '--hue': color }}>
          {version}
        </span>
        <span className="timeline-item__year">{year}</span>
        {isLast && <span className="timeline-item__badge">En cours</span>}
      </div>
      <h3 className="timeline-item__title">{title}</h3>
      <p className="timeline-item__description">{description}</p>
    </li>
  )
}

export default TimelineItem
