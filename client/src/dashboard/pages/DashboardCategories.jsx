import React, { useState, useEffect } from 'react';

const DashboardCategories = () => {
  const [categories, setCategories] = useState([]); // State to store categories
  const [newCategory, setNewCategory] = useState(''); // State to handle input value

  // Fetch categories automatically when the component mounts
  useEffect(() => {
    fetchCategories();
  }, []);

  // Function to simulate fetching categories from an API
  const fetchCategories = () => {
    // Simulating a fetch API call
    const fetchedCategories = ['Technology', 'Health', 'Travel', 'Lifestyle'];
    setCategories(fetchedCategories);
  };

  // Function to add a new category
  const addCategory = () => {
    if (newCategory.trim() === '') {
      alert('Category name cannot be empty!');
      return;
    }
    setCategories([...categories, newCategory]);
    setNewCategory(''); // Clear input
  };

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Categories Management</h1>

      {/* Add Category Section */}
      <div className="flex items-center space-x-4 mb-6">
        <input
          type="text"
          placeholder="Enter category name"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          className="flex-grow p-2 border rounded shadow-sm"
        />
        <button
          onClick={addCategory}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Category
        </button>
      </div>

      {/* Display Categories */}
      {categories.length > 0 ? (
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">All Categories:</h2>
          <ul className="list-disc pl-5">
            {categories.map((category, index) => (
              <li key={index} className="text-gray-800">
                {category}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="text-gray-500">No categories available.</p>
      )}
    </div>
  );
};

export default DashboardCategories;



