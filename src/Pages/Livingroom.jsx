import React from "react";
import "../Styles/product_section.css";


import modernSofa from "../assets/livingroom/modern sofa.webp";
import comfortAccentChair from "../assets/livingroom/Comfort Accent Chair.webp";
import woodenCoffeeTable from "../assets/livingroom/Wooden Coffee Table.jpg";
import minimalistTvUnit from "../assets/livingroom/Minimalist TV Unit.avif";
import openBookshelf from "../assets/livingroom/Open Bookshelf.webp";
import lShapedSectional from "../assets/livingroom/L-Shaped Sectional.webp";
import reclinerArmchair from "../assets/livingroom/Recliner Armchair.jpg";
import glassCoffeeTable from "../assets/livingroom/Glass Coffee Table.jpg";
import woodenTvStand from "../assets/livingroom/Wooden TV Stand.jpg";
import storageOttoman from "../assets/livingroom/Storage Ottoman.jpeg";

const products = [
  { imgSrc: modernSofa, alt: "Modern Sofa", title: "Modern Grey Sofa", price: "₹29,999" },
  { imgSrc: comfortAccentChair, alt: "Accent Chair", title: "Comfort Accent Chair", price: "₹11,499" },
  { imgSrc: woodenCoffeeTable, alt: "Wooden Coffee Table", title: "Wooden Coffee Table", price: "₹7,999" },
  { imgSrc: minimalistTvUnit, alt: "TV Unit", title: "Minimalist TV Unit", price: "₹12,999" },
  { imgSrc: openBookshelf, alt: "Bookshelf", title: "Open Bookshelf", price: "₹8,799" },
  { imgSrc: lShapedSectional, alt: "Sectional Sofa", title: "L-Shaped Sectional", price: "₹36,499" },
  { imgSrc: reclinerArmchair, alt: "Recliner Chair", title: "Recliner Armchair", price: "₹14,299" },
  { imgSrc: glassCoffeeTable, alt: "Glass Coffee Table", title: "Glass Coffee Table", price: "₹9,999" },
  { imgSrc: woodenTvStand, alt: "TV Stand", title: "Wooden TV Stand", price: "₹10,499" },
  { imgSrc: storageOttoman, alt: "Storage Ottoman", title: "Storage Ottoman", price: "₹5,299" },
];

const LivingRoom = () => {
  return (
    <div className="page-container">
      <h2 className="section-title">Living Room Collection</h2>

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

export default LivingRoom;
