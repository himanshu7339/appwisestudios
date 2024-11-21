import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Import useParams to access URL params
import LoadingSpinner from "../components/layout/spinner/LoadingSpinner";
import axios from "axios"; // Import axios for making HTTP requests

const BlogDetails = () => {
  const { slug } = useParams(); // Get the slug from the URL params
  const [blogPost, setBlogPost] = useState(null); // State to store the blog post data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const apiUrl = import.meta.env.VITE_API_URL;
  useEffect(() => {
    // Fetch the blog post details by slug when the component mounts
    const fetchBlogPost = async () => {
      try {
        const response = await axios.get(`${apiUrl}/blogpost/${slug}`); // Make GET request using the slug
        setBlogPost(response.data); // Set the blog post data in state
        setLoading(false); // Set loading to false when data is fetched
      } catch (error) {
        setError("Error fetching blog post"); // Set error state in case of failure
        setLoading(false); // Set loading to false even in case of error
      }
    };

    fetchBlogPost(); // Call the function to fetch the blog post
  }, [slug]); // Re-run the effect if the slug changes
  if (loading) {
    return <LoadingSpinner />; // Display loading text or spinner while fetching
  }

  if (error) {
    return <div>{error}</div>; // Display error message if there's an issue fetching data
  }

  // Render the blog post details
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-4">{blogPost.title}</h1>
      <p className="text-gray-600 text-sm text-center mb-4">
        {new Date(blogPost.createdAt).toLocaleDateString()}
      </p>
      <div className="flex justify-center mb-4">
        <img
          src={blogPost.image}
          alt={blogPost.title}
          className="w-full max-w-2xl h-auto"
        />
      </div>
      <p className="text-lg text-gray-800">{blogPost.content}</p>
      <div className="mt-4">
        <h3 className="text-xl font-semibold text-gray-700">
          Category: {blogPost.category.name}
        </h3>
        <div className="mt-4">
          <h4 className="text-lg font-semibold text-gray-700">Comments</h4>
          {blogPost.comments.length > 0 ? (
            <ul className="list-disc ml-5">
              {blogPost.comments.map((comment) => (
                <li key={comment._id} className="text-sm text-gray-600">
                  <strong>{comment.author}</strong>: {comment.content}
                </li>
              ))}
            </ul>
          ) : (
            <p>No comments yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
