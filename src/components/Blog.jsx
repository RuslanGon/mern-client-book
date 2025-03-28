import React from 'react';

export const Blog = () => {
  return (
    <div className="bg-teal-100 min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-semibold text-teal-800 mb-8 text-center">
          Welcome to Our Blog
        </h2>
        <div className="space-y-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-semibold text-teal-700 mb-4">
              The Importance of Reading Books
            </h3>
            <p className="text-lg text-gray-700 mb-4">
              In this blog post, we explore the importance of reading books. Books have long been a source of knowledge, entertainment, and inspiration for people around the world. From classic literature to modern-day bestsellers, books offer a wealth of opportunities for personal growth and learning.
            </p>
            <a
              href="#"
              className="inline-block mt-4 text-teal-600 font-medium hover:underline"
            >
              Read More
            </a>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-semibold text-teal-700 mb-4">
              Why Fiction Can Help You Grow
            </h3>
            <p className="text-lg text-gray-700 mb-4">
              Fiction can be more than just an escape from reality. It helps you understand complex emotions, enhances empathy, and offers a unique view into the human experience. In this post, we discuss how reading fiction can aid in personal development.
            </p>
            <a
              href="#"
              className="inline-block mt-4 text-teal-600 font-medium hover:underline"
            >
              Read More
            </a>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-semibold text-teal-700 mb-4">
              Top 10 Books to Read in 2025
            </h3>
            <p className="text-lg text-gray-700 mb-4">
              Every year, new and exciting books are released. In this post, we list the top 10 books you should add to your reading list in 2025. Whether you’re a fan of fiction, non-fiction, or self-help, there’s something for everyone.
            </p>
            <a
              href="#"
              className="inline-block mt-4 text-teal-600 font-medium hover:underline"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
