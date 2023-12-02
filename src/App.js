import React from "react";
import { Link } from "react-router-dom";

import { Router } from "./Router";
import { headerItemsReturn } from "./enums/routerEnum";

import "./App.css";

let headerItems = headerItemsReturn();

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <Header />
          <Router />
        </header>
      </div>
    </>
  );
}

export default App;

const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "25px",
      }}
    >
      {headerItems.map((item, index) => (
        <Link key={index.toString()} to={item.path}>
          {item.label}
        </Link>
      ))}
    </div>
  );
};
