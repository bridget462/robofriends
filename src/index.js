import React from "react";
// ReactDOM is used to render on the web
// use different package such as ReactNative based on the target screen
import ReactDOM from "react-dom";
import "./index.css";
// default import extension are .js
// so you can import App.js with "./App"
import * as serviceWorker from "./serviceWorker";
// to use predefined CSS package tachyons
import "tachyons";
import CardList from "./CardList.js";
import { robots } from "./robots.js";

ReactDOM.render(
  <React.StrictMode>
    <CardList robots={robots} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
