import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { News } from "./content/news";
import { Roadmap } from "./content/roadmap";
import { createStore } from "redux";

const defaultState = {
  page: <News />,
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "news":
      return { ...state, page: <News /> };
    case "roadmap":
      return { ...state, page: <Roadmap /> };
    default:
      return state;
  }
};

const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
