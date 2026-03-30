import { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import initialDestinations from './data/destinations';

function App() {
  const appTitle = 'Travel Destinations';
  const subtitle = 'Explore beautiful places around the world';
  const headerLabel = 'Laboratory Work No. 4';
  const sectionTitle = 'Popular travel destinations for inspiration';
  const introText =
    'Switch between all, visited, and planned destinations while keeping the visited status interactive on every travel card.';
  const navItems = ['Popular', 'Europe', 'Asia'];
  const categories = ['City Break', 'Historical', 'Beach', 'Cultural'];
  const footerText = 'Created for Laboratory Work on React';
  const filterOptions = ['all', 'visited', 'planned'];
  const [destinations, setDestinations] = useState(initialDestinations);
  const [filterMode, setFilterMode] = useState('all');

  const handleToggleVisited = (id) => {
    setDestinations((previousDestinations) =>
      previousDestinations.map((destination) =>
        destination.id === id
          ? { ...destination, visited: !destination.visited }
          : destination
      )
    );
  };

  const visitedCount = destinations.filter(
    (destination) => destination.visited
  ).length;

  const filteredDestinations = destinations.filter((destination) => {
    if (filterMode === 'visited') {
      return destination.visited;
    }

    if (filterMode === 'planned') {
      return !destination.visited;
    }

    return true;
  });

  return (
    <>
      <div className="page-shell">
        <Header
          label={headerLabel}
          title={appTitle}
          subtitle={subtitle}
          navItems={navItems}
          visitedCount={visitedCount}
        />
        <Main
          sectionTitle={sectionTitle}
          introText={introText}
          categories={categories}
          destinations={filteredDestinations}
          fullDestinationsCount={destinations.length}
          filterMode={filterMode}
          filterOptions={filterOptions}
          onFilterChange={setFilterMode}
          onToggleVisited={handleToggleVisited}
        />
        <Footer
          year={2026}
          courseName={footerText}
          destinationCount={destinations.length}
        />
      </div>
    </>
  );
}

export default App;
