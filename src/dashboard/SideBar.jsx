import React from 'react';
import {
  FaThLarge,
  FaInbox,
  FaUsers,
  FaShoppingBag,
  FaSignInAlt,
  FaUserPlus,
  FaHome,
  FaUser
} from 'react-icons/fa'; 

const SideBar = () => {
  return (
    <div
      className="bg-gray-100 dark:bg-gray-800 w-64 min-h-screen flex flex-col"
      aria-label="Sidebar"
    >
      <div className="px-3 py-4 overflow-y-auto">
        <ul className="space-y-2 font-medium">
          <li>
            <a
              href="/admin/dashboard"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 group"
            >
              <FaUser className="w-5 h-5 mr-2 text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="/admin/dashboard/upload"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 group"
            >
              <FaThLarge className="w-5 h-5 mr-2 text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
              Upload Book
            </a>
          </li>
          <li>
            <a
              href="/admin/dashboard/manage"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 group"
            >
              <FaInbox className="w-5 h-5 mr-2 text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
              Manage Books
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 group"
            >
              <FaUsers className="w-5 h-5 mr-2 text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
              Users
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 group"
            >
              <FaShoppingBag className="w-5 h-5 mr-2 text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
              Products
            </a>
          </li>
          <li>
            <a
              href="/login"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 group"
            >
              <FaSignInAlt className="w-5 h-5 mr-2 text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
              Sign In
            </a>
          </li>
          <li>
            <a
              href="/logout"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 group"
            >
              <FaUserPlus className="w-5 h-5 mr-2 text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
              Log Out
            </a>
          </li>
          <li>
            <a
              href="/"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 group"
            >
              <FaHome className="w-5 h-5 mr-2 text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
              Home
            </a>
          </li>
        </ul>
      </div>
     
    </div>
  );
};

export default SideBar;