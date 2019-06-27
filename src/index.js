import React from "react";
import ReactDOM from "react-dom";
import style from './css/specreator.css';

yaml = import('js-yaml');
fs = import('fs');

const App = () => {
  return <div>Hello React,Webpack 4 & Babel 7!</div>;
};

ReactDOM.render(<App />, document.querySelector("#root"));
