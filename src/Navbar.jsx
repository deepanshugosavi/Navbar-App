import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { ScreenData } from "./ScreenData";

function Navbar(props) {
  const [active, setActive] = useState(false);

  const handleOnClick = () => {
    setActive(!active);
  };
  const base_app_path = "/Navbar-App";

  return (
    <div className="navbar">
      {/* Navbar Toggle Button */}
      <div className="navbar__heading">
        <FaBars
          color="white"
          size="30px"
          className="navbar__btn"
          onClick={handleOnClick}
        />
        Deepanshu's Navbar-App
      </div>

      <nav className={active ? "navbar__active navbar__menu" : "navbar__menu"}>
        <div className="cancel__btn" onClick={handleOnClick}>
          <AiOutlineClose color="white" size="30px" />
        </div>
        {ScreenData.map((v, i) => {
          return (
            <Link to={base_app_path + v.path} className="menu__item" key={i}>
              <div className="menu__icon"> {v.icon} </div>
              <div className="menu__title">{v.title}</div>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

export default Navbar;
