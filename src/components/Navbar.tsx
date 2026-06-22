// Sticky navbar with blur effect
function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <div className="nav-logo">
          <span className="logo-icon">🍳</span>
          <span className="logo-text">Fooddio</span>
        </div>

        {/* Center menu */}
        <ul className="nav-menu">
          <li><a href="#home">Home</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#offers">Offers</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        {/* Order Now CTA */}
        <button className="nav-btn">Order Now</button>
      </div>
    </nav>
  );
}

export default Navbar;
