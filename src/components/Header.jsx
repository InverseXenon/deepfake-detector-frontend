import React from 'react';

function Header() {
  return (
    <header className="bg-gradient-to-r from-indigo-800 to-indigo-600 text-white text-center py-12 px-4 relative overflow-hidden">
      <h1 className="text-4xl md:text-5xl font-bold mb-2">Deepfake Detector</h1>
      <p className="text-lg md:text-xl opacity-90">Unmasking Reality with AI Precision</p>
      <a href="#demo" className="mt-5 inline-block px-8 py-3 bg-indigo-500 text-white rounded-full font-semibold hover:bg-indigo-600 transition">Try It Now</a>
    </header>
  );
}

export default Header;
