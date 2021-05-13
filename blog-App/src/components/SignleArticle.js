import React from "react";
import { articlesURL } from "../utils/constant";
import Loader from "./Loader";
import SingleHero from "./SignleHero";
import SingleArtiCont from "./SingleArtiCont";
export default class SingleArticle extends React.Component {
  state = {
    article: null,
    error: null,
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    const slug = this.props.match.params.slug;
    console.log(slug);
    fetch(articlesURL + `/${slug}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.status);
        }
        return res.json();
      })
      .then((data) =>
        this.setState({
          article: data.article,
          error: "",
        })
      )
      .catch((error) =>
        this.setState({
          error: error,
        })
      );
  };

  render() {
    let { article, error } = this.state;
    if (!article) {
      return <Loader />;
    }
    return (
      <>
        <SingleHero article={article} error={error} />
        <SingleArtiCont article={article} />
      </>
    );
  }
}
