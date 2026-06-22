// Feature cards section
function Content() {
  const features = [
    { icon: "🚚", title: "Fast Delivery", desc: "Quick delivery at your doorstep." },
    { icon: "🍔", title: "Fresh Food", desc: "Fresh and hygienic food always." },
    { icon: "💰", title: "Best Price", desc: "Best quality food at affordable price." },
  ];

  return (
    <section className="content" id="about">
      <div className="features-grid">
        {features.map((f, i) => (
          <div className="feature-card" key={i}>
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
