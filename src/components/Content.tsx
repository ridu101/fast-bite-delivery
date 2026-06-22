// Welcome section with feature cards
function Content() {
  const features = [
    { icon: "🚚", title: "Fast Delivery", desc: "Get your food delivered in under 30 minutes." },
    { icon: "🍔", title: "Fresh Food", desc: "Made with the freshest ingredients every day." },
    { icon: "💰", title: "Best Price", desc: "Affordable meals without compromising quality." },
  ];

  return (
    <section className="content" id="about">
      <h2 className="content-title">Welcome to FoodExpress</h2>
      <p className="content-text">
        Discover delicious meals delivered straight to your door.
      </p>
      <div className="feature-cards">
        {features.map((f) => (
          <div className="feature-card" key={f.title}>
            <div className="feature-icon">{f.icon}</div>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Content;
