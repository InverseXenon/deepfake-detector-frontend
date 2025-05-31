import React from 'react';

function Model() {
  return (
    <section id="model" className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg hover:-translate-y-1 transition max-w-lg w-full">
      <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-300 mb-4">Model Breakdown</h2>
      <ul className="list-none">
        <li className="mb-2 relative pl-5 text-gray-700 dark:text-gray-300"><span className="absolute left-0 text-teal-500">✓</span><strong>CNN</strong>: Extracts visual clues from frames.</li>
        <li className="mb-2 relative pl-5 text-gray-700 dark:text-gray-300"><span className="absolute left-0 text-teal-500">✓</span><strong>LSTM</strong>: Tracks changes over time.</li>
        <li className="relative pl-5 text-gray-700 dark:text-gray-300"><span className="absolute left-0 text-teal-500">✓</span><strong>MTCNN</strong>: Pinpoints faces for analysis.</li>
      </ul>
    </section>
  );
}

export default Model;
