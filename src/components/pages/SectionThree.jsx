import React from "react";
import "./SectionThree.css";
import { data } from "../data";
export default function SectionThree() {
  const dataArray = data.slice(0, 8).map((datum) => {
    return (
      <div key={datum.id} className="sectionThree-div">
        <div className="sectionThree-div1">
          <img
            src={datum.mainImg}
            alt="img"
            className="sectionThree-main_img"
          />
          <div className="sectionThree-flex">
            <p>{datum.text1}</p>
            <p id="sectionThree-text2">{datum.text2}</p>
          </div>
          <div className="sectionThree-flex">
            <p>{datum.text3}</p>
            <p>{datum.text4}</p>
          </div>
          <div>
            <img src={datum.img2} alt="img" className="sectionThree-star_img" />
            <img src={datum.img2} alt="img" className="sectionThree-star_img" />
            <img src={datum.img2} alt="img" className="sectionThree-star_img" />
            <img src={datum.img2} alt="img" className="sectionThree-star_img" />
            <img src={datum.img2} alt="img" className="sectionThree-star_img" />
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="sectionThree-div2">
      <h2 className="sectionThree-title">
        Inspiration for your next adventure
      </h2>
      <div className="sectionThree-flex2">{dataArray}</div>
    </div>
  );
}
