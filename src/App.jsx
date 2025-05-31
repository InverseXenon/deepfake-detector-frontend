import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Demo from './components/Demo';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <Nav />
        <main className="flex-grow container mx-auto p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card">
              <h2 className="text-2xl font-bold text-indigo-800 dark:text-indigo-400 mb-4">Welcome</h2>
              <p className="text-gray-700 dark:text-gray-300">
                Powered by cutting-edge AI, this tool detects deepfakes in videos with 87% accuracy. Upload a video and see the magic happen.
              </p>
            </div>
            <div className="card">
              <h2 className="text-2xl font-bold text-indigo-800 dark:text-indigo-400 mb-4">About the Project</h2>
              <p className="text-gray-700 dark:text-gray-300">
                Built on Kaggle using the FaceForensics++ dataset, this model combines face detection (MTCNN) with a CNN-LSTM architecture to spot fake videos.
              </p>
            </div>
            <div className="card">
              <h2 className="text-2xl font-bold text-indigo-800 dark:text-indigo-400 mb-4">Model Breakdown</h2>
              <ul className="list-none space-y-2">
                <li className="flex items-center text-gray-700 dark:text-gray-300">
                  <span className="text-indigo-500 mr-2">✓</span>
                  <strong>CNN:</strong> Extracts visual clues from frames.
                </li>
                <li className="flex items-center text-gray-700 dark:text-gray-300">
                  <span className="text-indigo-500 mr-2">✓</span>
                  <strong>LSTM:</strong> Tracks changes over time.
                </li>
                <li className="flex items-center text-gray-700 dark:text-gray-300">
                  <span className="text-indigo-500 mr-2">✓</span>
                  <strong>MTCNN:</strong> Pinpoints faces for analysis.
                </li>
              </ul>
            </div>
            <div className="card">
              <h2 className="text-2xl font-bold text-indigo-800 dark:text-indigo-400 mb-4">Performance</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Trained on 400 videos, it nails 87% accuracy. Check the stats:
              </p>
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="p-3">Class</th>
                    <th className="p-3">Precision</th>
                    <th className="p-3">Recall</th>
                    <th className="p-3">F1-Score</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-gray-50 dark:bg-gray-700">
                    <td className="p-3 text-center">Real</td>
                    <td className="p-3 text-center">0.90</td>
                    <td className="p-3 text-center">0.85</td>
                    <td className="p-3 text-center">0.88</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-700">
                    <td className="p-3 text-center">Fake</td>
                    <td className="p-3 text-center">0.83</td>
                    <td className="p-3 text-center">0.89</td>
                    <td className="p-3 text-center">0.86</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <Demo />
        </main>
        <Footer />
        <ThemeToggle />
      </div>
    </ThemeProvider>
  );
}

export default App;
