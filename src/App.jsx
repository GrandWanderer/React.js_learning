import { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import initialDestinations from './data/destinations';

function App() {
  const appTitle = 'Travel Destinations';
  const subtitle = 'Explore beautiful places around the world';
  const headerLabel = 'Laboratory Work No. 3';
  const sectionTitle = 'Popular travel destinations for inspiration';
  const introText =
    'Use the buttons on each card to change the visited status of a destination and see the interface update instantly through React state.';
  const navItems = ['Popular', 'Europe', 'Asia'];
  const categories = ['City Break', 'Historical', 'Beach', 'Cultural'];
  const footerText = 'Created for Laboratory Work on React';
  const [destinations, setDestinations] = useState(initialDestinations);

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
          destinations={destinations}
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
