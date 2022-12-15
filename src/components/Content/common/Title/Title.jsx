import React from "react";
import "./title.scss";
import { connect } from "react-redux";

const Title = (props) => {
  return (
    <div
      className={
        props.modeDark
          ? "title title--dark"
          : "title"
      }
    >
      <h3 className="title__title">{props.title}</h3>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    modeDark: state.main.modeDark,
  };
};

export default connect(mapStateToProps)(Title);
