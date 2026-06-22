// Sticky navigation bar
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">FoodExpress</div>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#offers">Offers</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
