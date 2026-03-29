function FilterBar() {
  return (
    <section className="filter-bar" aria-label="Decorative filters">
      <button type="button" className="filter-button active">
        Popular
      </button>
      <button type="button" className="filter-button" id="europe">
        Europe
      </button>
      <button type="button" className="filter-button" id="asia">
        Asia
      </button>
      <button type="button" className="filter-button">
        Cultural
      </button>
    </section>
  );
}

export default FilterBar;
