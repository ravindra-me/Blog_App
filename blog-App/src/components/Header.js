import React from "react";
import { NavLink, Route, Link } from "react-router-dom";
export default function Header(props) {
  const { isLogedInUser, user } = props;
  return (
    <header>
      <div class="container flex justify-between items-center py-4">
        <NavLink
          to="/index"
          exact
          className="text-green-500 font-bold text-2xl"
        >
          conduit
        </NavLink>
        <nav>
          <ul className="flex">
            <li className="ml-4">
              <NavLink to="/" activeClassName="text-gray-500" exact>
                Home
              </NavLink>
            </li>
            {isLogedInUser === false ? (
              <UnloginUser />
            ) : (
              <LoginUser user={user} />
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}

function UnloginUser(props) {
  return (
    <>
      <li className="ml-4">
        <NavLink activeClassName="text-gray-500" to="/login">
          Sign in
        </NavLink>
      </li>
      <li className="ml-4">
        <NavLink activeClassName="text-gray-500" to="/signup">
          Sign up
        </NavLink>
      </li>
    </>
  );
}

function LoginUser(props) {
  let { user } = props;
  return (
    <>
      <li className="ml-4">
        <NavLink activeClassName="text-gray-500" to="/editor">
          New post
        </NavLink>
      </li>
      <li className="ml-4">
        <NavLink activeClassName="text-gray-500" to="/setting">
          Setting
        </NavLink>
      </li>
      <li className="ml-4">
        <NavLink activeClassName="text-gray-500" to="/profile">
          {user.username}
        </NavLink>
      </li>
    </>
  );
}
