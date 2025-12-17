import React from 'react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-[#010101] border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
                <h3 className="text-xl font-bold text-white">Rahul Jain</h3>
                <p className="text-gray-400">Video Editor, Graphics & Motion Designer</p>
            </div>
            <button onClick={scrollToTop} className="bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white px-4 py-2 rounded-lg transition-colors">
                &uarr; Back to Top
            </button>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-800 text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Rahul Jain. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;