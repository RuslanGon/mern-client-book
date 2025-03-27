import React from 'react';

const Dashboard = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-800 dark:to-indigo-800">
      <div className="w-full max-w-5xl p-8 bg-white rounded-3xl shadow-2xl dark:bg-gray-800 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-400 dark:from-blue-400 dark:to-green-500">
            Welcome to Your Dashboard
          </h1>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
            Here, you can manage your account, settings, and view important information in an easy-to-use interface.
          </p>
        </div>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex flex-col items-center bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Your Overview</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">Get a quick overview of your activities.</p>
          </div>
          <div className="flex flex-col items-center bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Settings</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">Manage your settings and preferences.</p>
          </div>
          <div className="flex flex-col items-center bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Notifications</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">Stay up-to-date with important notifications.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
