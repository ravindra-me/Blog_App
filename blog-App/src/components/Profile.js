import React from "react";
import { NavLink } from "react-router-dom";
import ProfileBanner from "./ProfileBanner";
import { userProfile, articlesURL } from "../utils/constant";
import Pagination from "./Pagination";
import Posts from "./Posts";
class Profile extends React.Component {
  state = {
    activeTab: "author",
    articles: null,
    error: "",
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    const { activeTab } = this.state;
    fetch(articlesURL + `/?${activeTab}=${this.props.user.username}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Can not fatch data for specific user`);
        }
        console.log(res);
        return res.json();
      })
      .then((data) =>
        this.setState({
          articles: data.articles,
        })
      )
      .catch((error) =>
        this.setState({
          error: error,
        })
      );
  };

  handleActivetab = (activeTab) => {
    this.setState(
      {
        activeTab: activeTab,
      },
      () => this.fetchData()
    );
  };

  render() {
    let { user } = this.props;

    return (
      <>
        <ProfileBanner user={user} />
        <section className="py-8">
          <div className="container">
            <div class="border-b-2  pb-2">
              <ul className="flex">
                <li className="mr-4">
                  <button
                    className={`${
                      this.state.activeTab === "author" ? "active" : ""
                    }`}
                    onClick={() => this.handleActivetab("author")}
                  >
                    My Article
                  </button>
                </li>

                <li className="mr-4">
                  <button
                    className={`${
                      this.state.activeTab === "favorited" ? "active" : ""
                    }`}
                    onClick={() => this.handleActivetab("favorited")}
                  >
                    Favorited Article{" "}
                  </button>
                </li>
              </ul>
            </div>
            <Posts articles={this.state.articles} />
          </div>
        </section>
      </>
    );
  }
}

export default Profile;
