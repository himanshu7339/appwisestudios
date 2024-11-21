import React, { useState, useEffect } from "react";
import axios from "axios";
import BlogCard from "../components/layout/BlogCard";
import BlogCardSkeleton from "../components/layout/BlogCardSkeleton"
const Home = () => {
  // State to store the fetched data and loading state
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // Fetch data when the component mounts
  const apiUrl = import.meta.env.VITE_API_URL;
  useEffect(() => {
    // Define the API endpoint
    const fetchData = async () => {
      try {
        // Send a GET request to the API
        const response = await axios.get(`${apiUrl}/blogpost`);

        // Set the data to state
        setData(response.data);
      } catch (error) {
        // Handle any errors
        setError(error.message);
      } finally {
        // Set loading to false after the request is complete
        setLoading(false);
      }
    };

    fetchData(); // Call the function to fetch data
  }, []); // Empty dependency array means this effect runs only once when the component mounts

  console.log(data);
 
  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold text-center mb-8">Fetched Blog Posts</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {loading
          ? [...Array(4)].map((_, index) => (
              <BlogCardSkeleton key={index} />
            ))
          : data.map((item) => (
              <BlogCard
                title={item.title}
                key={item._id}
                metaDescription={item.metaDescription}
                image={item.image}
                author="Himanshu"
                date={item.createdAt}
                slug={item.slug}
              />
            ))}
      </div>
    </div>
  );
};

export default Home;
