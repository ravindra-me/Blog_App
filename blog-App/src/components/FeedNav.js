import { NavLink, Link } from "react-router-dom";

export default function FeedNav(props) {
  let { activeTab, emptyTab, isLogedInUser, user, yourFeed } = props;
  return (
    <section>
      <div class="border-b-2  pb-2">
        <ul className="flex">
          {isLogedInUser && (
            <li className="mr-4" onClick={() => yourFeed(user.username)}>
              <NavLink
                to="/"
                activeClassName={
                  isLogedInUser &&
                  "text-green-500 border-b-2 border-green-500 pb-3"
                }
              >
                your feed
              </NavLink>
            </li>
          )}
          <li className="mr-4" onClick={() => emptyTab()}>
            <NavLink
              to="/"
              activeClassName={`${
                activeTab === "" &&
                "text-green-500 border-b-2 border-green-500 pb-3"
              }`}
            >
              Global Feed
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              activeClassName={
                activeTab && "text-green-500 border-b-2 border-green-500 pb-3"
              }
            >
              {activeTab}
            </NavLink>
          </li>
        </ul>
      </div>
    </section>
  );
}
