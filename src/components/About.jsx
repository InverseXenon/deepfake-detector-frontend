import React from 'react';

function About() {
  return (
    <section id="about" className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg hover:-translate-y-1 transition max-w-lg w-full">
      <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-300 mb-4">About the Project</h2>
      <p className="text-gray-700 dark:text-gray-300">Built on Kaggle using the FaceForensics++ dataset, this model combines face detection (MTCNN) with a CNN-LSTM architecture to spot fake videos.</p>
    </section>
  );
}

export default About;
