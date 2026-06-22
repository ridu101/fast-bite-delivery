// Hero section
function Header() {
  return (
    <header className="header" id="home">
      <div className="header-container">
        {/* Left side - text */}
        <div className="header-text">
          <p className="header-tag">FAST • FRESH • RELIABLE</p>
          <h1 className="header-title">
            Delicious Food <br /> Delivered <span className="accent">Fast</span>
          </h1>
          <p className="header-desc">
            Your favorite meals delivered hot and fresh at your doorstep.
          </p>
          <div className="header-buttons">
            <button className="btn-primary">Order Now</button>
            <button className="btn-secondary">▶ Watch Video</button>
          </div>
        </div>

        {/* Right side - image with floating badge */}
        <div className="header-image">
          <img
            src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80"
            alt="Delicious food bowl"
          />
          <div className="floating-badge">
            <span className="badge-icon">🛵</span>
            <div>
              <strong>30-40 min</strong>
              <p>Delivery Time</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
