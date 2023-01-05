import React from "react";
import "./home.scss";
import myPhoto from "./../../../assets/images/myPhoto.jpg";
import { BsDownload } from "react-icons/bs";
import myCV from "./../../../assets/resume.pdf";
import { ScrollToTopOnMount } from "./../../../helpers/RouterUp";

const Home = (props) => {
  return (
    <div className="home">
      <ScrollToTopOnMount />
      <div className="home__wrapper">
        <div
          className={
            props.modeDark ? "home__image home__image--dark" : "home__image"
          }
        >
          <div
            className={
              props.modeDark
                ? "home__image-span home__image-span--dark"
                : "home__image-span"
            }
          ></div>
          <img
            className={
              props.modeDark ? "home__img home__img--dark" : "home__img"
            }
            src={myPhoto}
            alt=""
          />
        </div>
        <div className="home__box">
          <a
            className={
              props.modeDark
                ? "home__box-cv home__box-cv--dark"
                : "home__box-cv"
            }
            href={myCV}
            download
          >
            <BsDownload />
            CV (pdf)
          </a>
          <h2
            className={
              props.modeDark
                ? "home__box-title home__box-title--dark"
                : "home__box-title"
            }
          >
            {props.t("home.name")}
          </h2>
          <div className="home__box-text-inner">
            <div
              className={
                props.modeDark
                  ? "home__box-text home__box-text--dark"
                  : "home__box-text"
              }
            >
              {props.t("home.text")}
            </div>
          </div>
          <ul className="home__box-socials">
            {props.items.map((i) => {
              return (
                <li className="home__box-socials-item" key={i.id}>
                  <a
                    className={
                      props.modeDark
                        ? "home__box-socials-link home__box-socials-link--dark"
                        : "home__box-socials-link"
                    }
                    href={i.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {i.image}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
