import React from "react";
import "../Styles/product_section.css";

import luxuryVelvetBed from "../assets/bedroom/Luxury Velvet Bed.jpeg";
import modernKingBed from "../assets/bedroom/modern king bed.avif";
import classicWoodenBed from "../assets/bedroom/Classic Wooden Bed.avif";
import storageBed from "../assets/bedroom/Storage Bed.avif";
import upholsteredQueenBed from "../assets/bedroom/Upholstered Queen Bed.avif";
import platformBed from "../assets/bedroom/Platform Bed.jpg";
import lowHeightBed from "../assets/bedroom/Low Height Bed.jpg";
import wallMountBed from "../assets/bedroom/Wall Mount Bed.avif";
import foldableBed from "../assets/bedroom/Foldable Bed.webp";
import metalFrameBed from "../assets/bedroom/Metal Frame Bed.jpg";

const products = [
  { imgSrc: luxuryVelvetBed, alt: "Luxury Velvet Bed", title: "Luxury Velvet Bed", price: "₹45,999" },
  { imgSrc: modernKingBed, alt: "Modern King Bed", title: "Modern King Bed", price: "₹38,499" },
  { imgSrc: classicWoodenBed, alt: "Classic Wooden Bed", title: "Classic Wooden Bed", price: "₹32,999" },
  { imgSrc: storageBed, alt: "Storage Bed", title: "Storage Bed", price: "₹28,199" },
  { imgSrc: upholsteredQueenBed, alt: "Upholstered Queen Bed", title: "Upholstered Queen Bed", price: "₹33,899" },
  { imgSrc: platformBed, alt: "Platform Bed", title: "Platform Bed", price: "₹27,499" },
  { imgSrc: lowHeightBed, alt: "Low Height Bed", title: "Low Height Bed", price: "₹25,999" },
  { imgSrc: wallMountBed, alt: "Wall Mount Bed", title: "Wall Mount Bed", price: "₹34,599" },
  { imgSrc: foldableBed, alt: "Foldable Bed", title: "Foldable Bed", price: "₹22,799" },
  { imgSrc: metalFrameBed, alt: "Metal Frame Bed", title: "Metal Frame Bed", price: "₹19,499" },
];

const Bedroom = () => {
  return (
    <div className="page-container">
      <h2 className="section-title">Bedroom Collection</h2>

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

export default Bedroom;
