import React from "react";
import "./skills.scss";
import Title from "./../../Content/common/Title/Title";
import { HiOutlineCode } from "react-icons/hi";
import { AiOutlineBuild } from "react-icons/ai";
import { TbLanguage } from "react-icons/tb";
import { ScrollToTopOnMount } from "./../../../helpers/RouterUp";

const Skills = (props) => {
  return (
    <div className="content__page">
      <ScrollToTopOnMount />
      <Title title={props.t("title.skills")} />

      <div className="skills">
        <div className="skills__items">
          {props.items.map((item, indexItem) => (
            <div
              className={
                props.modeDark
                  ? "skills__item skills__item--dark"
                  : "skills__item"
              }
              key={indexItem.id}
            >
              <div className="skills__image">{item.img}</div>
              <div className="skills__item-box">
                <div className="skills__title">{item.title}</div>
                <div className="skills__text">{props.t(`${item.text}`)}</div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={
            props.modeDark
              ? "skills__wrapper skills__wrapper--dark"
              : "skills__wrapper"
          }
        >
          <h5 className="skills__list-title">
            {props.t("skills.skillstitle")} <HiOutlineCode />
          </h5>
          <ul className="skills__list">
            {props.skills.map((skill, indexSkill) => (
              <li className="skills__list-item" key={indexSkill.id}>
                {props.t(`${skill.title}`)}
              </li>
            ))}
          </ul>

          <h5 className="skills__list-title">
            {props.t("skills.listTitle")} <AiOutlineBuild />
          </h5>
          <ul className="skills__list">
            {props.list.map((listItem, listIndex) => (
              <li className="skills__list-item" key={listIndex.id}>
                {props.t(`${listItem.title}`)}
              </li>
            ))}
          </ul>

          <ul className="skills__list">
            {props.plugins.map((plugin, pluginIndex) => (
              <li className="skills__list-item" key={pluginIndex.id}>
                {props.t(`${plugin.title}`)}
              </li>
            ))}
          </ul>

          <ul className="skills__list">
            {props.additional.map((additional, additionalIndex) => (
              <li className="skills__list-item" key={additionalIndex.id}>
                {props.t(`${additional.title}`)}
              </li>
            ))}
          </ul>

          <h5 className="skills__list-title">
            {props.t("skills.foreignTitle")} <TbLanguage />
          </h5>
          <ul className="skills__list">
            {props.foreigns.map((foreigns, foreignsIndex) => (
              <li className="skills__list-item" key={foreignsIndex.id}>
                {props.t(`${foreigns.title}`)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
