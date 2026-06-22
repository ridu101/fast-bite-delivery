// Menu section with food cards
function Menu() {
  const items = [
    {
      name: "Burger",
      desc: "Juicy beef patty with cheese, lettuce, and our special sauce.",
      price: "$8.99",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
    },
    {
      name: "Pizza",
      desc: "Wood-fired pizza topped with fresh mozzarella and basil.",
      price: "$12.99",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591",
    },
    {
      name: "Fried Chicken",
      desc: "Crispy golden chicken seasoned with our secret spices.",
      price: "$10.49",
      image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58",
    },
  ];

  return (
    <section className="menu" id="menu">
      <h2 className="menu-title">Our Menu</h2>
      <div className="menu-grid">
        {items.map((item) => (
          <div className="menu-card" key={item.name}>
            <img src={item.image} alt={item.name} className="menu-image" />
            <div className="menu-card-body">
              <h3>{item.name}</h3>
              <p className="menu-desc">{item.desc}</p>
              <div className="menu-footer">
                <span className="menu-price">{item.price}</span>
                <button className="add-button">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Menu;
