import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import destinations from './data/destinations';

function App() {
  const title = 'Travel Destinations';
  const subtitle = 'Explore beautiful places around the world';
  const sectionTitle = 'Popular travel destinations for inspiration';
  const introText =
    'This static React application demonstrates component hierarchy and one-way data flow by passing travel destination data from App to nested presentation components.';
  const navItems = ['Popular', 'Europe', 'Asia'];
  const categories = ['City Break', 'Historical', 'Beach', 'Cultural'];
  const footerText = 'Created for Laboratory Work on React';

  return (
    <>
      <div className="page-shell">
        <Header title={title} subtitle={subtitle} navItems={navItems} />
        <Main
          sectionTitle={sectionTitle}
          introText={introText}
          categories={categories}
          destinations={destinations}
        />
        <Footer year={2026} courseName={footerText} />
      </div>
    </>
  );
}

export default App;
