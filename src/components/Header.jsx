import travelHero from '../assets/travel-hero.svg';

function Header() {
  return (
    <header className="site-header">
      <div className="container header-layout">
        <div className="header-content">
          <p className="eyebrow">Laboratory Work No. 1</p>
          <h1>Travel Destinations</h1>
          <p className="header-subtitle">
            Explore beautiful places around the world
          </p>

          <nav className="header-nav" aria-label="Destination categories">
            <a href="#popular" className="nav-link">
              Popular
            </a>
            <a href="#europe" className="nav-link">
              Europe
            </a>
            <a href="#asia" className="nav-link">
              Asia
            </a>
          </nav>
        </div>

        <div className="header-illustration">
          <img src={travelHero} alt="Travel illustration" />
        </div>
      </div>
    </header>
  );
}

export default Header;
