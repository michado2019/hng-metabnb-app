import React from "react";
import "./SectionFour.css";

export default function SectionFour() {
  return (
    <div className="sectionFour-wrapper">
      <div className="sectionFour-metabnb_details">
        <h1 className="sectionFour-title">Metabnb NFTs</h1>
        <p className="sectionFour-details">
          Discover our NFT gift cards collection. Loyal customers gets amazing
          gift cards which are traded as NFTs. These NFTs gives our cutomer
          access to loads of our exclusive services.
        </p>
        <button className="sectionFour-btn">Learn more</button>
      </div>
      <div className="sectionFour-transformed_img">
        <img
          src="images/image 9 (1).png"
          alt="img1"
          className="sectionFour-transformed_img1"
        />
        <img
          src="images/image 7.png"
          alt="img2"
          className="sectionFour-transformed_img2"
        />
        <img
          src="images/image 8.png"
          alt="img3"
          className="sectionFour-transformed_img3"
        />
      </div>
    </div>
  );
}
