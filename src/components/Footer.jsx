function Footer({ year, courseName, destinationCount }) {
  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <p>&copy; {year} Travel Destinations. All rights reserved.</p>
        <p>Total destinations: {destinationCount}</p>
        <p>{courseName}</p>
      </div>
    </footer>
  );
}

export default Footer;
