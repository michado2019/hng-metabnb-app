import React from "react";
import "./SectionOne.css";
export default function SectionOne() {

  return (
    <div className="sectionOne-wrapper">
      <div className="sectionOne-flex">
        <div className="sectionOne-div1">
          <h2>
            Rent a <span className="sectionOne-span"> Place </span>away from
            <span className="sectionOne-span"> Home </span>in the
            <span className="sectionOne-span"> Metaverse</span>
          </h2>
          <p>
            We provide you access to luxury and affordable houses in the
            metaverse, get a chance to turn your imagination to reality at your
            comfort zone
          </p>
          <form className="sectionOne-form">
            <input
              type="text"
              placeholder="Search for location"
              className="sectionOne-form_input"
            />
            <button className="sectionOne-form_btn">Search</button>
          </form>
        </div>
        <div className="sectionOne-img_div">
          <div className="sectionOne-img_flex1">
            <img
              src="images/image 4.png"
              alt="img"
              className="sectionOne-img"
            />
            <img
              src="images/image 6.png"
              alt="img"
              className="sectionOne-img"
            />
          </div>
          <div className="sectionOne-img_flex2">
            <img
              src="images/image 3.png"
              alt="img"
              className="sectionOne-img"
            />
            <img
              src="images/image 5.png"
              alt="img"
              className="sectionOne-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
}