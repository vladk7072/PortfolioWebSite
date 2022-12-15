import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from "redux";
import thunkMiddleware from "redux-thunk";
import mainReducer from "./main-reducer";
import barReducer from "./bar-reducer";
import homeReducer from "./home-reducer";
import contactsReducer from "./contacts-reducer";
import portfolioReducer from "./portfolio-reducer";
import skillsReducer from "./skills-reducer";

let reducers = combineReducers({
  main: mainReducer,
  bar: barReducer,
  homePage: homeReducer,
  contactsPage: contactsReducer,
  portfolioPage: portfolioReducer,
  skillsPage: skillsReducer,
});

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

export default store;