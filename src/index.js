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
import Card from "./Card.js";
import { robots } from "./robots.js";

ReactDOM.render(
  <React.StrictMode>
    <div>
      <Card id={robots[0].id} name={robots[0].name} email={robots[0].email} />
      <Card id={robots[1].id} name={robots[1].name} email={robots[1].email} />
      <Card id={robots[2].id} name={robots[2].name} email={robots[2].email} />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
