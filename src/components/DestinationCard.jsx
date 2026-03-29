function DestinationCard({
  id,
  image,
  name,
  country,
  description,
  rating,
  category,
  visited,
  onToggleVisited,
}) {
  return (
    <article className={`destination-card ${visited ? 'visited' : ''}`}>
      <img
        src={image}
        alt={`${name}, ${country}`}
        className="destination-image"
      />

      <div className="destination-content">
        <div className="destination-meta">
          <span className="category-badge">{category}</span>
          <span className="rating-badge">{rating} / 5</span>
        </div>
        <div className={`status-badge ${visited ? 'visited' : 'planned'}`}>
          {visited ? 'Visited' : 'Planned'}
        </div>

        <h3>
          {name}, {country}
        </h3>
        <p className="destination-description">{description}</p>

        <button
          type="button"
          className={`details-button ${visited ? 'visited' : ''}`}
          onClick={() => onToggleVisited(id)}
        >
          {visited ? 'Unvisit' : 'Mark as Visited'}
        </button>
      </div>
    </article>
  );
}

export default DestinationCard;
