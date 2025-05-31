import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ClipLoader } from 'react-spinners';

const sampleVideos = [
  { name: 'Sample Real Video 1', path: '/videos/real1.mp4', label: 'REAL' },
  { name: 'Sample Fake Video 1', path: '/videos/fake1.mp4', label: 'FAKE' },
  { name: 'Sample Real Video 2', path: '/videos/real2.mp4', label: 'REAL' },
  { name: 'Sample Fake Video 2', path: '/videos/fake2.mp4', label: 'FAKE' },
];

const Demo = () => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [uploadedVideo, setUploadedVideo] = useState(null);
  const [history, setHistory] = useState(() => {
    // Load history from local storage on initial render
    const savedHistory = localStorage.getItem('analysisHistory');
    return savedHistory ? JSON.parse(savedHistory) : [];
  });

  // Save history to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('analysisHistory', JSON.stringify(history));
  }, [history]);

  const analyzeVideo = async (videoPath) => {
    setLoading(true);
    try {
      const formData = new FormData();
      const response = await fetch(videoPath);
      const blob = await response.blob();
      formData.append('file', blob, 'video.mp4');

      const res = await axios.post('http://localhost:5000/predict', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      const analysisResult = { ...res.data, videoPath, timestamp: new Date().toLocaleString() };
      setResult(analysisResult);
      setHistory([analysisResult, ...history]);
      setShowModal(true);
    } catch (error) {
      console.error('Error:', error);
      setResult({ error: 'Analysis failed', videoPath, timestamp: new Date().toLocaleString() });
      setShowModal(true);
    }
    setLoading(false);
  };

  const handleVideoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const videoUrl = URL.createObjectURL(file);
      setUploadedVideo(videoUrl);
      setSelectedVideo(null);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setResult(null);
  };

  return (
    <div id="demo" className="w-full p-6 flex flex-col items-center bg-gray-50 dark:bg-gray-900">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-gray-100">Deepfake Detector</h1>
      <div className="w-full max-w-4xl bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Sample Videos</h2>
          <div className="grid grid-cols-2 gap-4">
            {sampleVideos.map((video, index) => (
              <button
                key={index}
                onClick={() => {
                  setSelectedVideo(video.path);
                  setUploadedVideo(null);
                }}
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                {video.name}
              </button>
            ))}
          </div>
        </div>
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Upload Your Video</h2>
          <input
            id="videoUpload"
            type="file"
            accept="video/*"
            onChange={handleVideoUpload}
            className="block w-full text-sm text-gray-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-md file:border-0
              file:text-sm file:font-semibold
              file:bg-indigo-50 file:text-indigo-700
              hover:file:bg-indigo-100"
          />
        </div>
        {selectedVideo && (
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Preview</h2>
            <div className="bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
              <video src={selectedVideo} controls className="w-full" key={selectedVideo}></video>
            </div>
            <button
              onClick={() => analyzeVideo(selectedVideo)}
              disabled={loading}
              className="mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 disabled:bg-indigo-300 flex items-center justify-center"
            >
              {loading ? <ClipLoader color="#ffffff" loading={loading} size={20} /> : 'Analyze Video'}
            </button>
          </div>
        )}
        {uploadedVideo && (
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Preview</h2>
            <div className="bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
              <video src={uploadedVideo} controls className="w-full" key={uploadedVideo}></video>
            </div>
            <button
              onClick={() => analyzeVideo(uploadedVideo)}
              disabled={loading}
              className="mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 disabled:bg-indigo-300 flex items-center justify-center"
            >
              {loading ? <ClipLoader color="#ffffff" loading={loading} size={20} /> : 'Analyze Video'}
            </button>
          </div>
        )}
      </div>

      <div className="w-full max-w-4xl mt-6 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Analysis History</h2>
        {history.length === 0 ? (
          <p className="text-gray-600 dark:text-gray-400">No analysis history yet.</p>
        ) : (
          <ul className="space-y-4">
            {history.map((item, index) => (
              <li key={index} className="p-4 border rounded-lg bg-gray-50 dark:bg-gray-700">
                <p className="font-semibold text-gray-800 dark:text-gray-200">
                  {item.timestamp} - {item.videoPath.split('/').pop()}
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  Result: <span className={item.label === 'FAKE' ? 'text-red-500' : 'text-green-500'}>{item.label}</span>
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  Confidence: {(item.confidence * 100).toFixed(2)}%
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>

      {showModal && result && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">Analysis Result</h2>
            {result.error ? (
              <p className="text-red-500">{result.error}</p>
            ) : (
              <>
                <p className="text-lg text-gray-900 dark:text-gray-100">
                  Result: <span className={result.label === 'FAKE' ? 'text-red-500' : 'text-green-500'}>{result.label}</span>
                </p>
                <p className="text-gray-900 dark:text-gray-100">Confidence: {(result.confidence * 100).toFixed(2)}%</p>
              </>
            )}
            <button
              onClick={closeModal}
              className="mt-4 w-full bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Demo;
