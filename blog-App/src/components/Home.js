import React from "react";
import Hero from "./Hero";
import AsideTags from "./AsideTag";
import FeedNav from "./FeedNav";
import Posts from "./Posts";
import Sidebar from "./Sidebar";
import { articlesURL } from "../utils/constant";

import Pagination from "./Pagination";
export default class Home extends React.Component {
  state = {
    articles: null,
    error: null,
    articlesCount: 0,
    articlePerPage: 10,
    activePageIndex: 1,
    activeTab: "",
  };

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(preProps, preState) {
    console.log(preState);
    if (
      preState.activePageIndex !== this.state.activePageIndex ||
      preState.activeTab !== this.state.activeTab
    ) {
      this.fetchData();
    }
  }

  fetchData = () => {
    const limit = this.state.articlePerPage;
    const offset = (this.state.activePageIndex - 1) * limit;
    const tag = this.state.activeTab;

    fetch(
      articlesURL + `/?offset=${offset}&limit=${limit}` + (tag && `&tag=${tag}`)
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.status);
        }
        console.log(res);
        return res.json();
      })
      .then((data) =>
        this.setState({
          articles: data.articles,
          error: "",
          articlesCount: data.articlesCount,
        })
      )
      .catch((error) =>
        this.setState({
          error: error,
        })
      );
  };

  changeIndex = (index) => {
    console.log(index);
    this.setState(
      {
        activePageIndex: index,
      },
      this.fetchData
    );
  };

  emptyTab = () => {
    this.setState({
      activeTab: "",
    });
  };

  addTab = (value) => {
    this.setState({
      activeTab: value,
    });
  };

  render() {
    let { articles, error, articlesCount, articlePerPage, activePageIndex } =
      this.state;
    return (
      <>
        <main>
          <Hero />
          <section className="py-8">
            <div className="container flex justify-between ">
              <div className="flex-60">
                <FeedNav
                  activeTab={this.state.activeTab}
                  emptyTab={this.emptyTab}
                />

                <Posts articles={articles} error={error} />
                <Pagination
                  articlePerPage={articlePerPage}
                  articlesCount={articlesCount}
                  activePageIndex={activePageIndex}
                  changeIndex={this.changeIndex}
                />
              </div>
              <Sidebar addTab={this.addTab} />
            </div>
          </section>
        </main>
      </>
    );
  }
}
