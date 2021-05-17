import React from "react";
import { Link } from "react-router-dom";

 function SingleHero(props) {
  console.log(props);
  const { author, createdAt, title } = props.article;
  return (
    <>
      <section className="py-24 bg-black">
        <div class="container  text-white ">
          <h1 className="text-center text-2xl font-bold mb-8">{title}</h1>
          <div className=" flex justify-center items-center">
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
        </div>
      </section>
    </>
  );
}

export default SingleHero