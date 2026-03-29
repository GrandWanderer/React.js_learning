function DestinationCard({
  image,
  name,
  country,
  description,
  rating,
  category,
}) {
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

        <div className="card-footer">
          <span className="price-label">From $799</span>
          <button type="button" className="details-button">
            View Details
          </button>
        </div>
      </div>
    </article>
  );
}

export default DestinationCard;
