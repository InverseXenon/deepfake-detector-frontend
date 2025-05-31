import React from 'react';

function Results() {
  return (
    <section id="results" className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg hover:-translate-y-1 transition max-w-lg w-full">
      <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-300 mb-4">Performance</h2>
      <p className="text-gray-700 dark:text-gray-300">Trained on 400 videos, it nails 87% accuracy. Check the stats:</p>
      <table className="w-full border-collapse mt-4">
        <thead>
          <tr className="bg-blue-900 text-white">
            <th className="p-3">Class</th>
            <th className="p-3">Precision</th>
            <th className="p-3">Recall</th>
            <th className="p-3">F1-Score</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600">
            <td className="p-3 text-center">Real</td>
            <td className="p-3 text-center">0.90</td>
            <td className="p-3 text-center">0.85</td>
            <td className="p-3 text-center">0.88</td>
          </tr>
          <tr className="bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600">
            <td className="p-3 text-center">Fake</td>
            <td className="p-3 text-center">0.83</td>
            <td className="p-3 text-center">0.89</td>
            <td className="p-3 text-center">0.86</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default Results;
