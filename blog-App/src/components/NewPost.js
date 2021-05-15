import React from "react";

export default function NewPost() {
  return (
    <section className="py-16">
      <form action="" className="width-50 border-2 p-8 shadow-lg rounded-lg">
        <input
          type="text"
          placeholder="Article Title"
          name="title"
          className="w-full border border-gray-400 mt-4 rounded px-2 py-2  "
        />
        <input
          type="text"
          placeholder="What's this article about border-gray-400"
          className="w-full border border-gray-400 mt-4 rounded px-2 py-2 "
        />
        <textarea
          name="description"
          id=""
          cols="30"
          rows="10"
          placeholder="Write your article(in markdown)"
          className="w-full border border-gray-400 mt-4 rounded px-2 py-2 "
        ></textarea>

        <input
          type="text"
          placeholder="Enter Tags"
          name="tagList"
          className="w-full border border-gray-400 mt-4 rounded px-2 py-2 "
        />
        <fieldset className="text-right mt-4">
          <input
            type="submit"
            className="bg-green-500 px-8 py-3 rounded text-white font-semibold text-xl"
            value="Publish Article"
          />
        </fieldset>
      </form>
    </section>
  );
}
