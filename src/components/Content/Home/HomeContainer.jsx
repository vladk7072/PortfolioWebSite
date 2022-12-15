import React from "react";
import { connect } from "react-redux";
import Home from "./Home";

const HomeContainer = (props) => {
  return <Home items={props.items} t={props.t} modeDark={props.modeDark} />;
};

const mapStateToProps = (state) => {
  return {
    items: state.homePage.items,
    modeDark: state.main.modeDark,
  };
};

export default connect(mapStateToProps)(HomeContainer);
