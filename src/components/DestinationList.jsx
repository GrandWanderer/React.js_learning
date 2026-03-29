import DestinationCard from './DestinationCard';

function DestinationList({ destinations }) {
  return (
    <section className="destinations-section" aria-label="Destination cards">
      <div className="destinations-grid">
        {destinations.map((destination) => (
          <DestinationCard
            key={destination.id}
            image={destination.image}
            name={destination.name}
            country={destination.country}
            description={destination.description}
            rating={destination.rating}
            category={destination.category}
          />
        ))}
      </div>
    </section>
  );
}

export default DestinationList;
