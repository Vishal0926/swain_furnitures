import React from "react";

const featuresData = [
  {
    img: "https://cdn-icons-png.flaticon.com/512/847/847969.png",
    title: "Top Quality",
    desc: "We ensure premium materials and perfect craftsmanship in every piece.",
  },
  {
    img: "https://cdn-icons-png.flaticon.com/512/3523/3523886.png",
    title: "Free Delivery",
    desc: "Fast and free delivery at your doorstep for all orders above ₹999.",
  },
  {
    img: "https://cdn-icons-png.flaticon.com/512/1077/1077035.png",
    title: "Easy Returns",
    desc: "Changed your mind? Enjoy a hassle-free return within 7 days.",
  },
  {
    img: "https://cdn-icons-png.flaticon.com/512/2910/2910791.png",
    title: "Secure Payments",
    desc: "All transactions are encrypted and fully secure with multiple payment options.",
  },
];

const Features = () => {
  return (
    <>
      <div className="quality">
        <h2 className="quality-1">Why To Choose us..!</h2>
      </div>
      <section className="features">
        {featuresData.map((feature, index) => (
          <div className="feature-card" key={index}>
            <img src={feature.img} alt={feature.title} />
            <h3>{feature.title}</h3>
            <p>{feature.desc}</p>
          </div>
        ))}
      </section>
    </>
  );
};

export default Features;