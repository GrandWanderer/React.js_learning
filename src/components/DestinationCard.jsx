function DestinationCard({ destination }) {
  const { name, country, description, rating, category, image } = destination;

  return (
    <article className="destination-card">
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

        <h3>
          {name}, {country}
        </h3>
        <p className="destination-description">{description}</p>

        <button type="button" className="details-button">
          View Details
        </button>
      </div>
    </article>
  );
}

export default DestinationCard;
