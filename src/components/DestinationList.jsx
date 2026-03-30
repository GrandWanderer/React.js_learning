import DestinationCard from './DestinationCard';

function DestinationList({ destinations, onToggleVisited, filterMode }) {
  return (
    <section className="destinations-section" aria-label="Destination cards">
      {destinations.length === 0 ? (
        <div className="empty-state">
          No destinations found for the "{filterMode}" filter.
        </div>
      ) : (
        <div className="destinations-grid">
          {destinations.map((destination) => (
            <DestinationCard
              key={destination.id}
              id={destination.id}
              image={destination.image}
              name={destination.name}
              country={destination.country}
              description={destination.description}
              rating={destination.rating}
              category={destination.category}
              visited={destination.visited}
              onToggleVisited={onToggleVisited}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default DestinationList;
