import React from "react"; //Main React.js library
import ReactDOM from "react-dom"; //we use ReactDOM to render into the DOM

const planets = ["Mars", "Venus", "Jupiter", "Earth", "Saturn", "Neptune"];

/**
 * 1) Create the mapping function and use it to generate a new array of
 * planets in html called planetsInHTML
 */
const animals = [{ label: "Horse" }, { label: "Turtle" }, { label: "Elephant" }, { label: "Monkey" }];

/**
 * change the content of the map function
 **/
const animalsInHTML = [
	<li>Horse</li>,
	<li>Turtle</li>,
	<li>Elephant</li>,
	<li>Monkey</li>
  ];


// 2) add the array planetsInHTML inside the innerHTML of this ul
const content = (<ul className="list-group m-5"></ul>);

ReactDOM.render(content, document.querySelector("#myDiv"));
