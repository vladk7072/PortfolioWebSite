import "./App.scss";
import BarMenuContainer from "./components/BarMenu/BarMenuContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import HomeContainer from "./components/Content/Home/HomeContainer";
import PortfolioContainer from "./components/Content/Portfolio/PortfolioContainer";
import SkillsContainer from "./components/Content/Skills/SkillsContainer";
import ContactsContainer from "./components/Content/Contacts/ContactsContainer";
import { Navigate, Route, Routes } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";

const App = (props) => {
  const { t, i18n } = useTranslation();

  return (
    <div className={props.modeDark ? "app app--dark" : "app"}>
      <BarMenuContainer i18n={i18n} t={t} />
      <div className="app__content">
        <HeaderContainer />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomeContainer t={t} />} />
          <Route path="/portfolio" element={<PortfolioContainer t={t} />} />
          <Route path="/skills" element={<SkillsContainer t={t} />} />
          <Route path="/contacts" element={<ContactsContainer t={t} />} />
        </Routes>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    modeDark: state.main.modeDark,
  };
};

export default connect(mapStateToProps)(App);
