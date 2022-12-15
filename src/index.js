import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import Preloader from "./components/Content/common/Preloader/Preloader";
import { Provider } from "react-redux";
import store from "./Redux/redux-store";
import "./i18n";

const App = React.lazy(() => import("./App"));

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <React.Suspense fallback={<Preloader />}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.Suspense>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
