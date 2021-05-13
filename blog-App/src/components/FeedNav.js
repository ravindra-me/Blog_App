import { NavLink } from "react-router-dom";

export default function FeedNav(props) {
  let { activeTab, emptyTab } = props;
  return (
    <section>
      <div class="border-b-2  pb-2">
        <ul className="flex">
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
