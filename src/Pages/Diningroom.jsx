import React from "react";
import "../Styles/product_section.css";

import sixSeaterDiningSet from "../assets/diningroom/6-Seater Wooden Dining Table Set.jpg";
import fourSeaterRoundGlass from "../assets/diningroom/4-Seater Round Glass Dining Table.jpg";
import extendableDiningTable from "../assets/diningroom/Extendable Dining Table.webp";
import roundDiningTable from "../assets/diningroom/4-Seater Round Glass Dining Table.jpg";
import marbleTopDiningSet from "../assets/diningroom/Marble Top Dining Table.jpg";
import diningBenchWithTable from "../assets/diningroom/Dining Bench with Table.webp";
import highBackWoodenChairs from "../assets/diningroom/High-Back Wooden Chairs.jpeg";
import buffetSideboardCabinet from "../assets/diningroom/Buffet Sideboard Cabinet.jpg";
import upholsteredDiningChairs from "../assets/diningroom/Upholstered Dining Chairs.avif";
import barUnitForDiningArea from "../assets/diningroom/Bar Unit for Dining Area.webp";

const products = [
  { imgSrc: sixSeaterDiningSet, alt: "6 Seater Dining Set", title: "6-Seater Dining Set", price: "₹42,999" },
  { imgSrc: fourSeaterRoundGlass, alt: "4 Seater Dining Table", title: "4-Seater Dining Table", price: "₹28,499" },
  { imgSrc: extendableDiningTable, alt: "Extendable Dining Table", title: "Extendable Dining Table", price: "₹36,999" },
  { imgSrc: roundDiningTable, alt: "Round Dining Table", title: "Round Dining Table", price: "₹31,199" },
  { imgSrc: marbleTopDiningSet, alt: "Glass Top Dining Set", title: "Glass Top Dining Set", price: "₹39,899" },
  { imgSrc: diningBenchWithTable, alt: "Marble Dining Table", title: "Marble Dining Table", price: "₹48,499" },
  { imgSrc: highBackWoodenChairs, alt: "Wooden Bench Dining Set", title: "Wooden Bench Dining Set", price: "₹33,499" },
  { imgSrc: buffetSideboardCabinet, alt: "Luxury Dining Chairs", title: "Luxury Dining Chairs", price: "₹18,599" },
  { imgSrc: upholsteredDiningChairs, alt: "Upholstered Dining Chairs", title: "Upholstered Dining Chairs", price: "₹21,799" },
  { imgSrc: barUnitForDiningArea, alt: "Bar Counter Table", title: "Bar Counter Table", price: "₹26,499" },
];

const DiningRoom = () => {
  return (
    <div className="page-container">
      <h2 className="section-title">Dining Room Collection</h2>

      <div className="product-container">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <img src={product.imgSrc} alt={product.alt} />
            <h3>{product.title}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiningRoom;
