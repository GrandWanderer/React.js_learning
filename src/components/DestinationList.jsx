import DestinationCard from './DestinationCard';

function DestinationList({ destinations }) {
  return (
    <section className="destinations-section" aria-label="Destination cards">
      <div className="destinations-grid">
        {destinations.map((destination) => (
          <DestinationCard key={destination.id} destination={destination} />
        ))}
      </div>
    </section>
  );
}

export default DestinationList;
