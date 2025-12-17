import React, { useState, useEffect } from 'react';

const VideoLightbox: React.FC<{ src: string; poster: string; onClose: () => void }> = ({ src, poster, onClose }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(onClose, 300); // Match animation duration
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  return (
    <div 
      className={`fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ease-in-out ${isClosing ? 'animate-fade-out' : 'animate-fade-in'}`}
      onClick={handleClose}
    >
      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .animate-fade-in { animation: fadeIn 0.3s forwards; }
        @keyframes fadeOut { from { opacity: 1; } to { opacity: 0; } }
        .animate-fade-out { animation: fadeOut 0.3s forwards; }

        @keyframes fade-scale-in {
            from { opacity: 0; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
        }
        @keyframes fade-scale-out {
            from { opacity: 1; transform: scale(1); }
            to { opacity: 0; transform: scale(0.95); }
        }
        .animate-fade-scale-in { animation: fade-scale-in 0.3s forwards; }
        .animate-fade-scale-out { animation: fade-scale-out 0.3s forwards; }

        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .animate-spin { animation: spin 1s linear infinite; }
      `}</style>
      
      <button 
        onClick={handleClose}
        className="absolute top-2 right-2 md:top-4 md:right-4 text-white text-5xl font-light bg-black/30 rounded-full w-12 h-12 flex items-center justify-center leading-none z-20 hover:bg-black/60 transition-colors"
        aria-label="Close video player"
      >
        &times;
      </button>

      <div 
        className={`relative w-full h-full flex items-center justify-center transform transition-transform duration-300 ease-in-out ${isClosing ? 'animate-fade-scale-out' : 'animate-fade-scale-in'}`} 
        onClick={e => e.stopPropagation()}
      >
        {isLoading && (
          <div className="absolute z-10 flex items-center justify-center">
            <div className="w-16 h-16 border-4 border-t-4 border-gray-600 border-t-white rounded-full animate-spin"></div>
          </div>
        )}
        <video
          src={src}
          poster={poster}
          controls
          autoPlay
          onPlaying={() => setIsLoading(false)}
          onWaiting={() => setIsLoading(true)}
          className={`w-auto h-auto max-w-full max-h-full rounded-lg shadow-2xl shadow-blue-500/30 object-contain transition-opacity duration-300 ${isLoading ? 'opacity-50' : 'opacity-100'}`}
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default VideoLightbox;