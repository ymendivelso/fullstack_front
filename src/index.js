import React from "react";
import ReactDOM from "react-dom";
import List from "./List";
import "./styles.css";
import Search from "./Search";



 
ReactDOM.render(<List team="" />, document.getElementById("app"));
// var mountNode = document.getElementById("app");
// ReactDOM.render(<App name="Yeiner" />, mountNode);
ReactDOM.render(<Search name="todos" page={1}/>, document.getElementById('field'));