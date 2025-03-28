import React from 'react';

export const About = () => {
  return (
    <div className="bg-teal-100 min-h-screen flex items-center justify-center py-16">
      <div className="bg-white max-w-4xl w-full p-8 rounded-lg shadow-lg">
        <h2 className="text-4xl font-semibold text-teal-800 mb-6 text-center">
          About Books and Their Importance
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Books have always played a significant role in human civilization, offering a means to preserve and communicate knowledge, values, and culture. They provide us with a deeper understanding of the world, inspire creativity, and offer different perspectives on life.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          Whether fiction or non-fiction, books serve as a gateway to new worlds, enabling readers to explore far-off lands, different eras, and even the complexity of the human experience. Each book holds a story waiting to be discovered, a lesson to be learned, or an adventure to be had.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          In today’s world, where knowledge is rapidly evolving, books remain a vital source of learning, personal growth, and inspiration. Whether you’re seeking to improve your skills, dive into a compelling story, or expand your mind, books will always be there to guide you.
        </p>
        <h3 className="text-2xl font-semibold text-teal-700 mb-4">
          The Impact of Reading
        </h3>
        <ul className="list-disc pl-6 text-gray-700">
          <li className="mb-2">Improves cognitive function and critical thinking</li>
          <li className="mb-2">Expands vocabulary and enhances communication skills</li>
          <li className="mb-2">Promotes empathy by seeing the world through different perspectives</li>
          <li className="mb-2">Relieves stress and improves mental health</li>
          <li className="mb-2">Provides lifelong learning opportunities</li>
        </ul>
        <p className="text-lg text-gray-700 mt-6">
          The journey of reading is never-ending. So whether you're diving into a classic, exploring a new genre, or learning something new, remember that books will always be your guide.
        </p>
      </div>
    </div>
  );
};
