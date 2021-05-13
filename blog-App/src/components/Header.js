import React from "react";
import { NavLink, Route } from "react-router-dom";
export default function Header() {
  return (
    <header>
      <div class="container flex justify-between items-center py-4">
        <NavLink to="/index" exact>
          conduit
        </NavLink>
        <nav>
          <ul className="flex">
            <li className="ml-4">
              <NavLink to="/" exact>
                Home
              </NavLink>
            </li>
            <li className="ml-4">
              <NavLink to="/login">Sign in</NavLink>
            </li>
            <li className="ml-4">
              <NavLink to="/signup">Sign up</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
