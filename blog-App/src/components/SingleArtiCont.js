import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

function SingleArtiCont(props) {
  const { description, tagList, body } = props.article;
  console.log(props.isLogedInUser);
  return (
    <section className="py-16">
      <div className="container">
        <div className="border-b-2 pb-8 tracking-wider article-cont">
          <h3 className="font-bold text-2xl mb-4">{description}</h3>
          <p className="text-gray-500">{body}</p>
          <ul className="flex mt-12">
            {tagList.map((e) =>
              e === "" ? (
                ""
              ) : (
                <li className="mr-4 border rounded px-2">
                  <Link href="">{e}</Link>
                </li>
              )
            )}
          </ul>
        </div>
        {props.isLogedInUser === false ? <Footer /> : ""}
      </div>
    </section>
  );
}

export default SingleArtiCont;
