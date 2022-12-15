import React from "react";
import "./languages.scss";
import { MdLanguage } from "react-icons/md";

const Languages = (props) => {
  const changeLanguage = (lang) => {
    props.changeLanguage(lang);
  };

  const setLangMode = () => {
    props.changeLgMode();
  };

  return (
    <div className="languages">
      <div
        onClick={() => setLangMode()}
        className={
          props.modeDark
            ? "languages__image languages__image--dark"
            : "languages__image"
        }
      >
        <MdLanguage />
      </div>
      <div
        className={
          props.langMode
            ? "languages__wrapper-inner languages__wrapper-inner--active"
            : "languages__wrapper-inner"
        }
      >
        <div
          className={
            props.modeDark
              ? "languages__wrapper languages__wrapper--dark"
              : "languages__wrapper"
          }
        >
          <div
            className={
              props.i18n.language === "ua"
                ? "languages__item languages__item--active"
                : "languages__item"
            }
            onClick={() => {
              changeLanguage("ua");
              setLangMode();
            }}
          >
            Ua
          </div>
          <div
            className={
              props.i18n.language === "ru"
                ? "languages__item languages__item--active"
                : "languages__item"
            }
            onClick={() => {
              changeLanguage("ru");
              setLangMode();
            }}
          >
            Ru
          </div>
          <div
            className={
              props.i18n.language === "en"
                ? "languages__item languages__item--active"
                : "languages__item"
            }
            onClick={() => {
              changeLanguage("en");
              setLangMode();
            }}
          >
            En
          </div>
        </div>
      </div>
    </div>
  );
};

export default Languages;
