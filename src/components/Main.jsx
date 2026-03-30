import DestinationList from './DestinationList';
import FilterBar from './FilterBar';

function Main({
  sectionTitle,
  introText,
  categories,
  destinations,
  fullDestinationsCount,
  filterMode,
  filterOptions,
  onFilterChange,
  onToggleVisited,
}) {
  return (
    <main className="site-main">
      <div className="container">
        <section className="intro-section" id="popular">
          <div className="section-heading">
            <p className="section-label">Featured Collection</p>
            <h2>{sectionTitle}</h2>
          </div>
          <p className="intro-text">{introText}</p>
        </section>

        <section className="category-section" aria-label="Travel categories">
          <div className="filter-bar">
            {categories.map((category, index) => (
              <span
                key={category}
                className={`filter-button ${index === 0 ? 'active' : ''}`}
              >
                {category}
              </span>
            ))}
          </div>
        </section>

        <div className="results-summary">
          Showing {destinations.length} of {fullDestinationsCount} destinations
        </div>

        <FilterBar
          filterMode={filterMode}
          filterOptions={filterOptions}
          onFilterChange={onFilterChange}
        />

        <DestinationList
          destinations={destinations}
          filterMode={filterMode}
          onToggleVisited={onToggleVisited}
        />
      </div>
    </main>
  );
}

export default Main;
