import React from "react"; //Main React.js library
import ReactDOM from "react-dom"; //we use ReactDOM to render into the DOM

// only update the value of this array
const navlinkItems = [];
const animalsInHTML = [
    <li>Horse</li>,
    <li>Turtle</li>,
    <li>Elephant</li>,
    <li>Monkey</li>
  ];

const content = <ul className="nav">{navlinkItems}</ul>;

ReactDOM.render(content, document.querySelector("#myDiv"));
