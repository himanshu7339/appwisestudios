import React, { useState } from 'react';

const DashboardPosts = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Post 1', content: 'Content for Post 1' },
    { id: 2, title: 'Post 2', content: 'Content for Post 2' },
    { id: 3, title: 'Post 3', content: 'Content for Post 3' },
  ]);

  const [deletePostId, setDeletePostId] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleDelete = () => {
    setPosts(posts.filter((post) => post.id !== deletePostId));
    setShowModal(false);
    setDeletePostId(null);
  };

  const openDeleteModal = (postId) => {
    setDeletePostId(postId);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setDeletePostId(null);
  };

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      <div className="space-y-4">
        {posts.map((post) => (
          <div
            key={post.id}
            className="p-4 border rounded-md shadow-sm flex justify-between items-center"
          >
            <div>
              <h2 className="text-lg font-semibold">{post.title}</h2>
              <p className="text-gray-600">{post.content}</p>
            </div>
            <div className="flex space-x-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Edit
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                onClick={() => openDeleteModal(post.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-lg font-bold mb-4">Confirm Deletion</h2>
            <p className="text-gray-600 mb-6">
              Are you sure you want to delete this post? This action cannot be undone.
            </p>
            <div className="flex justify-end space-x-4">
              <button
                className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
                onClick={closeModal}
              >
                Cancel
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                onClick={handleDelete}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardPosts;
