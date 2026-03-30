import { useState } from 'react';

function AddDestinationForm({ onAddDestination, categories }) {
  const defaultCategory = categories[0] || 'City Break';
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const [category, setCategory] = useState(defaultCategory);
  const [visited, setVisited] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name.trim()) {
      setErrorMessage('Destination name is required.');
      return;
    }

    const newDestination = {
      id: Date.now(),
      name: name.trim(),
      country: country.trim() || 'Unknown country',
      description: 'Custom destination added by user.',
      rating: 4.5,
      category,
      image:
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80',
      visited,
    };

    onAddDestination(newDestination);
    setName('');
    setCountry('');
    setCategory(defaultCategory);
    setVisited(false);
    setErrorMessage('');
  };

  return (
    <section className="form-section" aria-label="Add destination form">
      <div className="form-card">
        <div className="section-heading">
          <p className="section-label">Add Destination</p>
          <h2>Create a new travel card</h2>
        </div>

        <form className="destination-form" onSubmit={handleSubmit}>
          <label className="form-field">
            <span>Name</span>
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Enter destination name"
            />
          </label>

          <label className="form-field">
            <span>Country</span>
            <input
              type="text"
              value={country}
              onChange={(event) => setCountry(event.target.value)}
              placeholder="Enter country"
            />
          </label>

          <label className="form-field">
            <span>Category</span>
            <select
              value={category}
              onChange={(event) => setCategory(event.target.value)}
            >
              {categories.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>

          <label className="checkbox-field">
            <input
              type="checkbox"
              checked={visited}
              onChange={(event) => setVisited(event.target.checked)}
            />
            <span>Mark as visited</span>
          </label>

          <button type="submit" className="submit-button">
            Add Destination
          </button>
        </form>

        {errorMessage && <p className="form-error">{errorMessage}</p>}
      </div>
    </section>
  );
}

export default AddDestinationForm;
