// Menu section with 6 popular food cards
function Menu() {
  const items = [
    {
      name: "Cheese Burger",
      desc: "Juicy grilled patty with melted cheese.",
      price: "৳250",
      img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80",
    },
    {
      name: "Chicken Pizza",
      desc: "Cheesy pizza loaded with tender chicken.",
      price: "৳550",
      img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80",
    },
    {
      name: "Fried Chicken",
      desc: "Crispy golden fried chicken with spices.",
      price: "৳350",
      img: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=600&q=80",
    },
    {
      name: "Creamy Pasta",
      desc: "Rich creamy pasta with herbs and cheese.",
      price: "৳280",
      img: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=600&q=80",
    },
    {
      name: "Chicken Noodles",
      desc: "Stir-fried noodles with juicy chicken.",
      price: "৳220",
      img: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=600&q=80",
    },
    {
      name: "Club Sandwich",
      desc: "Triple layer sandwich with fresh fillings.",
      price: "৳200",
      img: "https://images.unsplash.com/photo-1567234669003-dce7a7a88821?w=600&q=80",
    },
  ];

  return (
    <section className="menu" id="menu">
      <div className="menu-header">
        <p className="menu-sub">OUR MENU</p>
        <h2 className="menu-title">Popular Menu</h2>
      </div>

      <div className="menu-grid">
        {items.map((item, i) => (
          <div className="menu-card" key={i}>
            <div className="menu-img-wrap">
              <img src={item.img} alt={item.name} />
            </div>
            <div className="menu-info">
              <h3>{item.name}</h3>
              <p>{item.desc}</p>
              <div className="menu-bottom">
                <span className="menu-price">{item.price}</span>
                <button className="add-btn">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Menu;
