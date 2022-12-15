import React from "react";
import "./skills.scss";
import { connect } from "react-redux";
import Skills from "./Skills";

const SkillsContainer = (props) => {
  return <Skills {...props} />;
};

const mapStateToProps = (state) => {
  return {
    items: state.skillsPage.items,
    modeDark: state.main.modeDark,
    skills: state.skillsPage.skills,
    list: state.skillsPage.list,
    plugins: state.skillsPage.plugins,
    additional: state.skillsPage.additional,
    foreigns: state.skillsPage.foreigns,
  };
};

export default connect(mapStateToProps)(SkillsContainer);
