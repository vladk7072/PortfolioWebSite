import React from "react";
import "./barmenu.scss";
import { NavLink } from "react-router-dom";
import Languages from "./../Content/common/Languages/Languages";

const BarMenu = (props) => {
  return (
    <div className={props.modeDark ? "barMenu barMenu--dark" : "barMenu"}>
      <Languages
        changeLanguage={props.changeLanguage}
        i18n={props.i18n}
        modeDark={props.modeDark}
        changeLgMode={props.changeLgMode}
        langMode={props.langMode}
      />
      <ul className="barMenu__list">
        {props.items.map((barItem, i) => {
          return (
            <NavLink
              className={
                props.modeDark
                  ? ({ isActive }) =>
                      isActive
                        ? "barMenu__item-link barMenu__item-link--dark barMenu__item-link--active"
                        : "barMenu__item-link barMenu__item-link--dark"
                  : ({ isActive }) =>
                      isActive
                        ? "barMenu__item-link barMenu__item-link--active"
                        : "barMenu__item-link"
              }
              key={i}
              to={barItem.link}
            >
              {barItem.icon}
              <div className="barMenu__item">{props.t(`${barItem.item}`)}</div>
            </NavLink>
          );
        })}
      </ul>
    </div>
  );
};

export default BarMenu;
