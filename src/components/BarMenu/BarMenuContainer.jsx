import React from "react";
import BarMenu from "./BarMenu";
import { connect } from "react-redux";
import { changeLgMode } from "./../../Redux/main-reducer";

const BarMenuContainer = (props) => {
  const changeLanguage = (lang) => {
    props.i18n.changeLanguage(lang);
  };

  return (
    <BarMenu
      items={props.items}
      changeLanguage={changeLanguage}
      i18n={props.i18n}
      modeDark={props.modeDark}
      changeLgMode={props.changeLgMode}
      langMode={props.langMode}
      t={props.t}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    modeDark: state.main.modeDark,
    langMode: state.main.langMode,
    items: state.bar.items
  };
};

export default connect(mapStateToProps, { changeLgMode })(BarMenuContainer);
