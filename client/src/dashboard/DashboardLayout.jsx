import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaHome, FaEdit, FaList, FaComments, FaTags, FaBars, FaTimes } from 'react-icons/fa';

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to toggle sidebar

  // Define the links with their respective icons and paths
  const links = [
    { name: 'Home', path: '/dashboard', icon: <FaHome /> },
    { name: 'New Post', path: '/dashboard/new-post', icon: <FaEdit /> },
    { name: 'Posts', path: '/dashboard/posts', icon: <FaList /> },
    { name: 'Comments', path: '/dashboard/comments', icon: <FaComments /> },
    { name: 'Categories', path: '/dashboard/categories', icon: <FaTags /> },
  ];

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-gray-800 text-white z-50 transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 md:static md:translate-x-0 md:w-64`}
      >
        <div className="p-4 text-lg font-bold">Appwise Studios</div>
        <nav>
          <ul>
            {links.map((link) => (
              <li key={link.path} className="flex items-center px-4 py-2 hover:bg-gray-700">
                <span className="mr-3">{link.icon}</span>
                <Link to={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <header className="bg-gray-100 p-4 shadow-md flex items-center justify-between">
          <h1 className="text-xl font-semibold">Dashboard</h1>
          {/* Sidebar Toggle Button for Mobile */}
          <button
            className="text-gray-800 text-2xl md:hidden"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
        </header>

        {/* Content Area */}
        <main className="flex-1 p-6 bg-gray-50">
          <Outlet />
        </main>
      </div>

      {/* Background Overlay for Mobile Sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default DashboardLayout;
