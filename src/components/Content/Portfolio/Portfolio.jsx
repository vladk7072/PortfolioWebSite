import React from "react";
import "./portfolio.scss";
import Title from "./../common/Title/Title";
import { FiLink } from "react-icons/fi";
import { HiArrowDown } from "react-icons/hi";
import { ScrollToTopOnMount } from "./../../../helpers/RouterUp";

const Portfolio = (props) => {

  return (
    <div className="content__page">
      <ScrollToTopOnMount />
      <Title title={props.t("title.portfolio")} />
      <div className="portfolio">
        <div className="portfolio__items">
          {props.items.map((i) => (
            <div className="portfolio__item" key={i.id}>
              {i.hasRealLink ? (
                <a
                  className="portfolio__item-image"
                  href={i.hasRealLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={i.img} alt="" />
                </a>
              ) : (
                <div className="portfolio__item-image">
                  <img src={i.img} alt="" />
                </div>
              )}

              <div
                className={
                  props.modeDark
                    ? "portfolio__item-box portfolio__item-box--dark "
                    : "portfolio__item-box"
                }
              >
                <h5 className="portfolio__item-title">
                  {props.t(`${i.title}`)}
                </h5>
                <div className="portfolio__item-inner">
                  {i.links && (
                    <div className="portfolio__item-deploy">
                      {i.isOpen ? (
                        <div
                          className="portfolio__item-deploy-title"
                          onClick={() => props.isClose(i.id)}
                        >
                          {i.links && (
                            <div>
                              {props.t("portfolio.links")}
                              <HiArrowDown className="portfolio__item-deploy-link" />
                            </div>
                          )}
                        </div>
                      ) : (
                        <div
                          className="portfolio__item-deploy-title"
                          onClick={() => props.isOpen(i.id)}
                        >
                          {i.links && (
                            <div>
                              {props.t("portfolio.links")}
                              <FiLink className="portfolio__item-deploy-link" />
                            </div>
                          )}
                        </div>
                      )}

                      <ul
                        className={
                          i.isOpen
                            ? "portfolio__list portfolio__list--active"
                            : "portfolio__list"
                        }
                      >
                        {i.links &&
                          i.links.map((l, index) => (
                            <li className="portfolio__list-item" key={index}>
                              <a
                                className={
                                  props.modeDark
                                    ? "portfolio__list-link portfolio__list-link--dark"
                                    : "portfolio__list-link"
                                }
                                href={l}
                                target="_blank"
                                rel="noreferrer"
                              >
                                {l}
                              </a>
                            </li>
                          ))}
                      </ul>
                    </div>
                  )}
                  {i.hasRealLink && (
                    <div className="portfolio__item-deploy">
                      <a
                        className="portfolio__item-deploy-title"
                        href={i.hasRealLink}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {props.t("portfolio.link")}
                        <FiLink className="portfolio__item-deploy-link" />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
