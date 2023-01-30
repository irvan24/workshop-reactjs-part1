import React from "react";
import ReactDOM from "react-dom";

const animals = ["Horse", "Turtle", "Elephant", "Monkey"];

/**
 * change the content inside the map function
 **/
const animalsInHTML = [
	<li>Horse</li>,
	<li>Turtle</li>,
	<li>Elephant</li>,
	<li>Monkey</li>
  ];

ReactDOM.render(<ul>{animalsInHTML}</ul>, document.querySelector("#myDiv"));
