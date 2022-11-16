import React from "react";
import "./PlaceToStay.css";
import { Link } from "react-router-dom";
import { data } from "../data";

export default function PlaceToStay() {
  const dataArray = data.map((datum) => {
    return (
      <div key={datum.id} className="placeToStay-div">
        <div className="placeToStay-div1">
          <img
            src={datum.mainImg}
            alt="img"
            className="placeToStay-main_img"
          />
          <div className="placeToStay-flex">
            <p>{datum.text1}</p>
            <p id="placeToStay-text2">{datum.text2}</p>
          </div>
          <div className="placeToStay-flex">
            <p>{datum.text3}</p>
            <p>{datum.text4}</p>
          </div>
          <div>
            <img src={datum.img2} alt="img" className="placeToStay-star_img" />
            <img src={datum.img2} alt="img" className="placeToStay-star_img" />
            <img src={datum.img2} alt="img" className="placeToStay-star_img" />
            <img src={datum.img2} alt="img" className="placeToStay-star_img" />
            <img src={datum.img2} alt="img" className="placeToStay-star_img" />
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="placeToStay-wrapper">
      <nav className="placeToStay-navLinks">
        <ul>
          <li>
            <Link className="placeToStay-navLink">Restaurant</Link>
          </li>
          <li>
            <Link className="placeToStay-navLink">Cottage</Link>
          </li>
          <li>
            <Link className="placeToStay-navLink">Castle</Link>
          </li>
          <li>
            <Link className="placeToStay-navLink">Fantast city</Link>
          </li>
          <li>
            <Link className="placeToStay-navLink">Beach</Link>
          </li>
          <li>
            <Link className="placeToStay-navLink">Cabins</Link>
          </li>
          <li>
            <Link className="placeToStay-navLink">Off-grid</Link>
          </li>
          <li>
            <Link className="placeToStay-navLink">Farm</Link>
          </li>
          <li>
            <button className="placeToStay-btn">
              <span className="placeToStay-btn_text">Location</span>
              <img
                src="images/Vector-place.png"
                alt="img"
                className="placeToStay-btn_img"
              />
            </button>
          </li>
        </ul>
      </nav>
      <div className="placeToStay-div2">
        <div className="placeToStay-flex2">{dataArray}</div>
      </div>
    </div>
  );
}