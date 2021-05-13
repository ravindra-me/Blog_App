import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
export default function SingleArtiCont(props) {
  const { description, tagList } = props.article;
  return (
    <section className="py-16">
      <div className="container">
        <div className="border-b-2 pb-8 tracking-wider article-cont">
          <p className="text-gray-500">{description}</p>
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
        <Footer />
      </div>
    </section>
  );
}
