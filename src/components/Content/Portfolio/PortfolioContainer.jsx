import React from "react";
import "./portfolio.scss";
import { connect } from "react-redux";
import { setOpenList, setCloseList } from "./../../../Redux/portfolio-reducer";
import Portfolio from "./Portfolio";

const PortfolioContainer = (props) => {
  let isOpen = (itemId) => {
    props.setOpenList(itemId);
  };
  let isClose = (itemId) => {
    props.setCloseList(itemId);
  };

  return (
    <Portfolio
      modeDark={props.modeDark}
      isOpen={isOpen}
      isClose={isClose}
      items={props.items}
      t={props.t}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    items: state.portfolioPage.items,
    modeDark: state.main.modeDark,
  };
};

export default connect(mapStateToProps, { setOpenList, setCloseList })(
  PortfolioContainer
);
