import React from "react";
import { Link } from "react-router-dom";
import imagePost from "../../../../server/public/uploads/il_1140xN.6366617367_s6il.jpg";

const BlogCard = ({ title, image, metaDescription, slug, author, date }) => {
  console.log(image);
  return (
    <Link
      to={`/${slug}`}
      className="max-w-xs rounded-lg shadow-lg overflow-hidden bg-white hover:shadow-xl transition-shadow duration-300"
    >
      {/* Blog Image */}
      <img src={image} alt={title} className="w-full h-48 object-cover" />

      {/* Blog Content */}
      <div className="p-4">
        {/* Blog Title */}
        <h3 className="text-xl font-semibold text-gray-800 hover:text-blue-500 transition-colors duration-300">
          {title}
        </h3>

        {/* Meta Description */}
        <p className="text-gray-600 mt-2 text-sm line-clamp-3">
          {metaDescription}
        </p>

        {/* Author and Date */}
        <div className="text-gray-500 mt-2 text-sm">
          <span className="mr-2">By: {author}</span> |
          <span className="ml-2">{new Date(date).toLocaleDateString()}</span>
        </div>

        {/* Read More Button */}
        <Link
          to={`/${slug}`}
          className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-blue-600 transition-colors duration-300"
        >
          Read More
        </Link>
      </div>
    </Link>
  );
};

export default BlogCard;
