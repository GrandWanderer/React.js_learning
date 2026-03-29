function Footer({ year, courseName }) {
  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <p>&copy; {year} Travel Destinations. All rights reserved.</p>
        <p>{courseName}</p>
      </div>
    </footer>
  );
}

export default Footer;
