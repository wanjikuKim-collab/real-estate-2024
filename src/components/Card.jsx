import { NavLink } from "react-router-dom";
import "./card.scss";
import { IoLocationOutline } from "react-icons/io5";
import { RiHotelBedLine } from "react-icons/ri";
import { PiBathtubBold } from "react-icons/pi";
import { FaRegBookmark } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { FaRocketchat } from "react-icons/fa";
import { useState } from "react";

function Card({ item }) {
  const [save, setSave] = useState(false);

  function handleSave() {
    setSave(!save);
  }

  return (
    <div className="card">
      <NavLink to={`/${item.id}`} className="imgContainer">
        <img src={item.img} />
      </NavLink>
      <div className="textContainer">
        <NavLink to={`/${item.id}`}>
          <h2 className="title">{item.title}</h2>
        </NavLink>
        <p className="address">
          <IoLocationOutline />
          <span>{item.address}</span>
        </p>
        <p className="price">${item.price}</p>
        <div className="bottom">
            {/* FEATURES */}
          <div className="features">
            <div className="feature">
              <RiHotelBedLine size={20} />
              <span>{item.bedroom} bedroom</span>
            </div>
            <div className="feature">
              <PiBathtubBold size={20} />
              <span>{item.bathroom} bathroom</span>
            </div>
          </div>
          {/* ICONS */}
          <div className="icons">
            <div className="icon" onClick={handleSave}>
              {save ? <FaBookmark /> : <FaRegBookmark />}
            </div>
            <div className="icon">
              <FaRocketchat />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
