import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import destinations from './data/destinations';

function App() {
  return (
    <>
      <div className="page-shell">
        <Header />
        <Main destinations={destinations} />
        <Footer />
      </div>
    </>
  );
}

export default App;
