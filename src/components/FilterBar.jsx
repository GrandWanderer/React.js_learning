function FilterBar({ filterMode, filterOptions, onFilterChange }) {
  return (
    <section className="filter-panel" aria-label="Display filters">
      <div className="filter-bar">
        {filterOptions.map((option) => (
          <button
            key={option}
            type="button"
            className={`filter-button ${filterMode === option ? 'active' : ''}`}
            onClick={() => onFilterChange(option)}
          >
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </button>
        ))}
      </div>
    </section>
  );
}

export default FilterBar;
