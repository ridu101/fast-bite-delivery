// Premium dark gradient footer
function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-accent-line" />
      <div className="footer-container">
        {/* Left - brand */}
        <div className="footer-col">
          <div className="footer-logo">
            <span className="logo-icon">🍳</span>
            <span>Fooddio</span>
          </div>
          <p className="footer-desc">
            Delicious food delivered fast and fresh at your doorstep.
            Enjoy the best meals with Fooddio.
          </p>
        </div>

        {/* Owner */}
        <div className="footer-col">
          <h4>Owner</h4>
          <p>👤 Md Fahim Reza</p>
        </div>

        {/* Location */}
        <div className="footer-col">
          <h4>Location</h4>
          <p>📍 City University, Khagan, Savar, Dhaka</p>
        </div>

        {/* Mobile */}
        <div className="footer-col">
          <h4>Mobile</h4>
          <p>📞 01404131309</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Fooddio. All rights reserved.</p>
        <div className="social-icons">
          <a href="#" aria-label="Facebook">f</a>
          <a href="#" aria-label="Instagram">ig</a>
          <a href="#" aria-label="Twitter">tw</a>
          <a href="#" aria-label="LinkedIn">in</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
