import DestinationList from './DestinationList';
import FilterBar from './FilterBar';

function Main({ destinations }) {
  return (
    <main className="site-main">
      <div className="container">
        <section className="intro-section" id="popular">
          <div className="section-heading">
            <p className="section-label">Featured Collection</p>
            <h2>Popular travel destinations for inspiration</h2>
          </div>
          <p className="intro-text">
            This educational React page presents a curated collection of
            well-known places for tourism, cultural trips, and relaxing city
            breaks. Each destination card highlights a short description,
            category, and visitor rating in a clean and simple layout.
          </p>
        </section>

        <FilterBar />
        <DestinationList destinations={destinations} />
      </div>
    </main>
  );
}

export default Main;
