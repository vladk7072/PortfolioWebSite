import React from "react";
import "./contacts.scss";
import Title from "./../common/Title/Title";
import GoogleMapReact from "google-map-react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Formik } from "formik";
import { FiSend } from "react-icons/fi";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { BiLoaderAlt } from "react-icons/bi";
import { ScrollToTopOnMount } from "./../../../helpers/RouterUp";

const Contacts = (props) => {
  const AnyReactComponent = ({ text }) => <div>{text}</div>;
  return (
    <div className="content__page">
      <ScrollToTopOnMount />
      <Title title={props.t("title.contact")} />
      <div className="content__page-map">
        {props.modeDark ? (
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyDbCMGdYyroGndtZxvwPkZfxbJctLN0TT0",
            }}
            defaultCenter={props.defaultProps.center}
            defaultZoom={props.defaultProps.zoom}
            options={{
              styles: [
                {
                  featureType: "all",
                  elementType: "labels.text.fill",
                  stylers: [
                    {
                      saturation: 36,
                    },
                    {
                      color: "#000000",
                    },
                    {
                      lightness: 40,
                    },
                  ],
                },
                {
                  featureType: "all",
                  elementType: "labels.text.stroke",
                  stylers: [
                    {
                      visibility: "on",
                    },
                    {
                      color: "#000000",
                    },
                    {
                      lightness: 16,
                    },
                  ],
                },
                {
                  featureType: "all",
                  elementType: "labels.icon",
                  stylers: [
                    {
                      visibility: "off",
                    },
                  ],
                },
                {
                  featureType: "administrative",
                  elementType: "geometry.fill",
                  stylers: [
                    {
                      color: "#000000",
                    },
                    {
                      lightness: 20,
                    },
                  ],
                },
                {
                  featureType: "administrative",
                  elementType: "geometry.stroke",
                  stylers: [
                    {
                      color: "#767676",
                    },
                    {
                      lightness: 17,
                    },
                    {
                      weight: 1.2,
                    },
                  ],
                },
                {
                  featureType: "landscape",
                  elementType: "geometry",
                  stylers: [
                    {
                      color: "#0a0a0a",
                    },
                    {
                      lightness: 20,
                    },
                  ],
                },
                {
                  featureType: "poi",
                  elementType: "geometry",
                  stylers: [
                    {
                      color: "#000",
                    },
                    {
                      lightness: 21,
                    },
                  ],
                },
                {
                  featureType: "road.highway",
                  elementType: "geometry.fill",
                  stylers: [
                    {
                      color: "#000000",
                    },
                    {
                      lightness: 17,
                    },
                  ],
                },
                {
                  featureType: "road.highway",
                  elementType: "geometry.stroke",
                  stylers: [
                    {
                      color: "#000000",
                    },
                    {
                      lightness: 29,
                    },
                    {
                      weight: 0.2,
                    },
                  ],
                },
                {
                  featureType: "road.arterial",
                  elementType: "geometry",
                  stylers: [
                    {
                      color: "#000000",
                    },
                    {
                      lightness: 18,
                    },
                  ],
                },
                {
                  featureType: "road.local",
                  elementType: "geometry",
                  stylers: [
                    {
                      color: "#000000",
                    },
                    {
                      lightness: 16,
                    },
                  ],
                },
                {
                  featureType: "transit",
                  elementType: "geometry",
                  stylers: [
                    {
                      color: "#000000",
                    },
                    {
                      lightness: 19,
                    },
                  ],
                },
                {
                  featureType: "water",
                  elementType: "geometry",
                  stylers: [
                    {
                      color: "#000000",
                    },
                    {
                      lightness: 17,
                    },
                  ],
                },
              ],
            }}
          >
            <AnyReactComponent
              lat={50.468938370796565}
              lng={30.517350321572422}
              text={
                <FaMapMarkerAlt style={{ height: "21px", width: "auto" }} />
              }
            />
          </GoogleMapReact>
        ) : (
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyDbCMGdYyroGndtZxvwPkZfxbJctLN0TT0",
            }}
            defaultCenter={props.defaultProps.center}
            defaultZoom={props.defaultProps.zoom}
            options={{
              styles: [
                {
                  featureType: "water",
                  elementType: "geometry",
                  stylers: [
                    {
                      color: "#e9e9e9",
                    },
                    {
                      lightness: 17,
                    },
                  ],
                },
                {
                  featureType: "landscape",
                  elementType: "geometry",
                  stylers: [
                    {
                      color: "#f5f5f5",
                    },
                    {
                      lightness: 20,
                    },
                  ],
                },
                {
                  featureType: "road.highway",
                  elementType: "geometry.fill",
                  stylers: [
                    {
                      color: "#ffffff",
                    },
                    {
                      lightness: 17,
                    },
                  ],
                },
                {
                  featureType: "road.highway",
                  elementType: "geometry.stroke",
                  stylers: [
                    {
                      color: "#ffffff",
                    },
                    {
                      lightness: 29,
                    },
                    {
                      weight: 0.2,
                    },
                  ],
                },
                {
                  featureType: "road.arterial",
                  elementType: "geometry",
                  stylers: [
                    {
                      color: "#ffffff",
                    },
                    {
                      lightness: 18,
                    },
                  ],
                },
                {
                  featureType: "road.local",
                  elementType: "geometry",
                  stylers: [
                    {
                      color: "#ffffff",
                    },
                    {
                      lightness: 16,
                    },
                  ],
                },
                {
                  featureType: "poi",
                  elementType: "geometry",
                  stylers: [
                    {
                      color: "#f5f5f5",
                    },
                    {
                      lightness: 21,
                    },
                  ],
                },
                {
                  featureType: "poi.park",
                  elementType: "geometry",
                  stylers: [
                    {
                      color: "#dedede",
                    },
                    {
                      lightness: 21,
                    },
                  ],
                },
                {
                  elementType: "labels.text.stroke",
                  stylers: [
                    {
                      visibility: "on",
                    },
                    {
                      color: "#ffffff",
                    },
                    {
                      lightness: 16,
                    },
                  ],
                },
                {
                  elementType: "labels.text.fill",
                  stylers: [
                    {
                      saturation: 36,
                    },
                    {
                      color: "#333333",
                    },
                    {
                      lightness: 40,
                    },
                  ],
                },
                {
                  elementType: "labels.icon",
                  stylers: [
                    {
                      visibility: "off",
                    },
                  ],
                },
                {
                  featureType: "transit",
                  elementType: "geometry",
                  stylers: [
                    {
                      color: "#f2f2f2",
                    },
                    {
                      lightness: 19,
                    },
                  ],
                },
                {
                  featureType: "administrative",
                  elementType: "geometry.fill",
                  stylers: [
                    {
                      color: "#fefefe",
                    },
                    {
                      lightness: 20,
                    },
                  ],
                },
                {
                  featureType: "administrative",
                  elementType: "geometry.stroke",
                  stylers: [
                    {
                      color: "#fefefe",
                    },
                    {
                      lightness: 17,
                    },
                    {
                      weight: 1.2,
                    },
                  ],
                },
              ],
            }}
          >
            <AnyReactComponent
              lat={50.468938370796565}
              lng={30.517350321572422}
              text={
                <FaMapMarkerAlt style={{ height: "21px", width: "auto" }} />
              }
            />
          </GoogleMapReact>
        )}
      </div>

      <div className="contacts__wrapper">
        <div
          className={
            props.modeDark
              ? "table__infome table__infome-nonm table__infome--dark"
              : "table__infome table__infome-nonm"
          }
        >
          {props.items.map((i) => {
            return (
              <div className="table__infome-item" key={i.id}>
                <h5
                  className={
                    props.modeDark
                      ? "table__infome-title table__infome-title--dark"
                      : "table__infome-title"
                  }
                >
                  {props.t(`${i.title}`)}
                </h5>
                {i.link ? (
                  <a className="table__infome-text" href={i.link}>
                    {props.t(`${i.text}`)}
                  </a>
                ) : (
                  <p className="table__infome-text">{props.t(`${i.text}`)}</p>
                )}
              </div>
            );
          })}
        </div>

        <Formik
          initialValues={{ title: "", email: "", text: "" }}
          validate={props.emailValidate}
          onSubmit={(values, { setSubmitting }) => {
            let message = `<b>Заявка с сайта!</b>\n`;
            message += `<b>Отправитель: </b>${values.title}\n`;
            message += `<b>Почта: </b>${values.email}\n`;
            message += `<b>Письмо: </b>${values.text}\n`;
            setSubmitting(
              props.sendForm(
                props.token,
                props.chat_id,
                props.parse_mode,
                message
              )
            );
            values.title = "";
            values.email = "";
            values.text = "";
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form
              className={
                props.modeDark
                  ? "contacts__form contacts__form--dark"
                  : "contacts__form"
              }
              onSubmit={handleSubmit}
            >
              <input
                className="contacts__form-input"
                type="title"
                name="title"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.title}
                placeholder={props.t(`${"contacts.formName"}`)}
              />
              <input
                className="contacts__form-input"
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder={props.t(`${"contacts.formMail"}`)}
              />
              <div className="contacts__form-error">
                {errors.email && touched.email && errors.email}
              </div>
              <textarea
                className="contacts__form-input contacts__form-textarea"
                type="text"
                name="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.text}
                placeholder={props.t(`${"contacts.formText"}`)}
              />
              {isSubmitting &&
                (props.postSuccess ? (
                  <div className="contacts__form-success">
                    {props.t(`${"contacts.formSuccess"}`)}
                    <div className="contacts__form-success-truck">
                      <AiOutlineCheckCircle />
                    </div>
                  </div>
                ) : (
                  <div className="contacts__form-success">
                    {props.t(`${"contacts.formSuccessLoad"}`)}
                    <div className="contacts__form-success-truck contacts__form-success-progress">
                      <BiLoaderAlt />
                    </div>
                  </div>
                ))}
              <button className="contacts__form-btn" type="submit">
                {props.t(`${"contacts.formBtn"}`)}
                <FiSend />
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Contacts;
