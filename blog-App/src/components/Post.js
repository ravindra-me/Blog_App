import React from "react";
import { Link } from "react-router-dom";
export default function Post(props) {
  let { author, createdAt, title, description, tagList, slug } = props;
  return (
    <article className="mt-8 border-b-2 pb-4">
      <header className="flex justify-between items-center">
        <div className="flex">
          <div>
            <Link href="/profile">
              <img
                src={
                  author.image ||
                  "https://static.productionready.io/images/smiley-cyrus.jpg"
                }
                alt="avatar"
                className="w-12 h-12 rounded-full"
              />
            </Link>
          </div>
          <div className="ml-4">
            <Link href="/profile">{author.username}</Link>
            <p>{createdAt}</p>
          </div>
        </div>
        <div>
          <button>
            <i className="far fa-heart"></i>
          </button>
        </div>
      </header>
      <div className="my-4">
        <Link to={`/article/${slug}`}>
          <h1>{title}</h1>
          <p>{description.slice(0, 50)}...</p>
        </Link>
      </div>
      <div className="flex justify-between items-center mt-4 text-gray-400">
        <Link to={`/article/${slug}`}>lern more...</Link>
        <ul className="flex">
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
    </article>
  );
}
