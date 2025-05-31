import React from 'react';

function Home() {
  return (
    <section id="home" className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg hover:-translate-y-1 transition max-w-lg w-full">
      <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-300 mb-4">Welcome</h2>
      <p className="text-gray-700 dark:text-gray-300">Powered by cutting-edge AI, this tool detects deepfakes in videos with 87% accuracy. Upload a video and see the magic happen.</p>
    </section>
  );
}

export default Home;
