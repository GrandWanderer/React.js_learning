import travelHero from '../assets/travel-hero.svg';

function Header({ label, title, subtitle, navItems, visitedCount }) {
  return (
    <header className="site-header">
      <div className="container header-layout">
        <div className="header-content">
          <p className="eyebrow">{label}</p>
          <h1>{title}</h1>
          <p className="header-subtitle">{subtitle}</p>
          <div className="visited-summary">
            Visited destinations: <strong>{visitedCount}</strong>
          </div>

          <nav className="header-nav" aria-label="Destination categories">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="nav-link"
              >
                {item}
              </a>
            ))}
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
