import React, { useState } from 'react';

const DashboardComments = () => {
  const [comments, setComments] = useState([
    { id: 1, text: 'This is the first comment.' },
    { id: 2, text: 'Another insightful comment.' },
    { id: 3, text: 'Here is yet another comment!' },
  ]);

  const [editCommentId, setEditCommentId] = useState(null);
  const [editCommentText, setEditCommentText] = useState('');
  const [deleteCommentId, setDeleteCommentId] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  // Open the Edit Modal
  const openEditModal = (comment) => {
    setEditCommentId(comment.id);
    setEditCommentText(comment.text);
    setShowEditModal(true);
  };

  // Handle Edit Confirmation
  const handleEdit = () => {
    setComments(
      comments.map((comment) =>
        comment.id === editCommentId
          ? { ...comment, text: editCommentText }
          : comment
      )
    );
    setShowEditModal(false);
  };

  // Open the Delete Modal
  const openDeleteModal = (id) => {
    setDeleteCommentId(id);
    setShowDeleteModal(true);
  };

  // Handle Delete Confirmation
  const handleDelete = () => {
    setComments(comments.filter((comment) => comment.id !== deleteCommentId));
    setShowDeleteModal(false);
  };

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Comments Dashboard</h1>

      {/* Comment List */}
      <div className="space-y-4">
        {comments.map((comment) => (
          <div
            key={comment.id}
            className="p-4 border rounded-md shadow-sm flex justify-between items-center"
          >
            <p className="text-gray-800">{comment.text}</p>
            <div className="flex space-x-4">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={() => openEditModal(comment)}
              >
                Edit
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                onClick={() => openDeleteModal(comment.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Edit Modal */}
      {showEditModal && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-lg font-bold mb-4">Edit Comment</h2>
            <textarea
              className="w-full p-2 border rounded"
              rows="4"
              value={editCommentText}
              onChange={(e) => setEditCommentText(e.target.value)}
            ></textarea>
            <div className="flex justify-end space-x-4 mt-4">
              <button
                className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
                onClick={() => setShowEditModal(false)}
              >
                Cancel
              </button>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={handleEdit}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-lg font-bold mb-4">Confirm Deletion</h2>
            <p className="text-gray-600 mb-6">
              Are you sure you want to delete this comment? This action cannot be undone.
            </p>
            <div className="flex justify-end space-x-4">
              <button
                className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
                onClick={() => setShowDeleteModal(false)}
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

export default DashboardComments;
