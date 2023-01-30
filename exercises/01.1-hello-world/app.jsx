import React from "react"; //Main React.js library

import ReactDOM from "react-dom"; //we use ReactDOM to render into the DOM
let age = 20;
// WHAT: This variable returns contains the html to render
let output = <span> James is { age } years old </span>

// WHERE: A DOM element that will contain the entire react generated html
const myDiv = document.querySelector("#myDiv");

//what   //where
ReactDOM.render(output, myDiv);
