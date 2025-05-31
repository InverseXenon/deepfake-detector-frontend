import React from 'react';

function Nav() {
  return (
    <nav className="bg-blue-900 text-white py-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-center">
        {['home', 'about', 'model', 'results', 'demo'].map((section) => (
          <a
            key={section}
            href={`#${section}`}
            className="mx-2 sm:mx-5 font-semibold hover:text-teal-500 transition"
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default Nav;
