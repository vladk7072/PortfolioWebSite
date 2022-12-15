import React from "react";
import { MdModeNight } from "react-icons/md";
import { BsSun } from "react-icons/bs";
import "./header.scss";

const Header = (props) => {
  let toggle = () => {
    props.changeMode();
  };

  return (
    <header className="header">
      <div
        className={
          props.modeDark
            ? "header__colorBtn header__colorBtn--dark"
            : "header__colorBtn"
        }
        onClick={() => toggle()}
      >
        {props.modeDark ? (
          <BsSun className="header__colorBtn-img" />
        ) : (
          <MdModeNight className="header__colorBtn-img" />
        )}
      </div>
    </header>
  );
};

export default Header;
