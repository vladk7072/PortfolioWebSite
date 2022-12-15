import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { changeMode } from "./../../Redux/main-reducer";

const HeaderContainer = (props) => {
  return <Header changeMode={props.changeMode} modeDark={props.modeDark} />;
};

const mapStateToProps = (state) => {
  return {
    modeDark: state.main.modeDark,
  };
};

export default connect(mapStateToProps, { changeMode })(HeaderContainer);
