// src/components/StreamPopup.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const StreamPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            className="bg-gradient-to-br from-pink-900 to-red-900 p-6 rounded-lg max-w-md w-full"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-pink-200 hover:text-pink-100"
            >
              ✕
            </button>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-pink-200 mb-4">Start Streaming Now!</h3>
              <div className="mb-4 rounded-lg overflow-hidden">
                <img src="/images/photo_2022-11-09 22.06.24.jpeg" alt="Stream Preview" className="w-full" />
              </div>
              <button className="bg-pink-600 text-white px-6 py-2 rounded-full hover:bg-pink-700 transition-colors">
                Start Now
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StreamPopup;