import React from "react";
import { NavLink } from "react-router-dom";

const Buttons = () => {
  return (
    <div className="scroll-bottom">
      <NavLink to={} className="left hover">
        <span>&#10092;</span>
      </NavLink>
      <NavLink to={} className="right hover">
        <span>&#10093;</span>
      </NavLink>
    </div>
  );
};

export default Buttons;
