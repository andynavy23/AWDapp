import React, { Component } from "react";
import { Route, NavLink, HashRouter, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Stuff from "./pages/Stuff";
import Contact from "./pages/Contact";
import MyGrid, { MyGridTwo, MyGridThree } from "./pages/GridLayout";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Simple SPA</h1>
          <ul className="header">
            <li>
              <NavLink exact="true" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/stuff">Stuff</NavLink>
            </li>
            <li>
              <NavLink to="/gridlayout1">Grid Layout One</NavLink>
            </li>
            <li>
              <NavLink to="/gridlayout2">Grid Layout Two</NavLink>
            </li>
            <li>
              <NavLink to="/gridlayout3">Grid Layout Three</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
          <div className="content">
            <Routes>
              <Route exact="true" path="/" element={<Home />} />
              <Route path="/stuff" element={<Stuff />} />
              <Route path="/gridlayout1" element={<MyGrid />} />
              <Route path="/gridlayout2" element={<MyGridTwo />} />
              <Route path="/gridlayout3" element={<MyGridThree />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
