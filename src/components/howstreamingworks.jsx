// src/components/HowStreamingWorks.jsx
import React from 'react';
import { motion } from 'framer-motion';

const HowStreamingWorks = () => {
  return (
    <section className="py-16 px-4 relative overflow-hidden">
      {/* Title */}
      <h2 className="text-4xl font-bold text-center text-white mb-12" data-aos="fade-up">
        How Streaming Works
      </h2>

      {/* Horizontal Sphere with HotCams */}
      <div className="flex justify-center mb-16" data-aos="zoom-in">
        <div className="relative">
          <div className="w-[300px] h-[100px] bg-gradient-to-r from-pink-600 via-pink-500 to-pink-600 rounded-full flex items-center justify-center transform hover:scale-105 transition-transform duration-300 shadow-2xl">
            <span className="text-2xl font-bold text-white tracking-wider">HOTCAMS</span>
          </div>
          {/* Decorative circles */}
          <div className="absolute inset-0 rounded-full border-2 border-pink-400 opacity-20 animate-pulse"></div>
          <div className="absolute inset-0 rounded-full border-4 border-pink-300 opacity-10" style={{ animation: 'pulse 2s infinite' }}></div>
        </div>
      </div>

      {/* Streaming Information */}
      <div className="max-w-4xl mx-auto text-white text-center mb-16" data-aos="fade-up">
        <div className="bg-black bg-opacity-30 p-8 rounded-2xl backdrop-blur-sm">
          <h3 className="text-2xl font-bold mb-4">Native Token Payment System</h3>
          <p className="text-lg mb-6">
            Experience seamless streaming using our native token payment system. 
            Viewers can support their favorite creators directly using our platform tokens, 
            ensuring secure and instant transactions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-pink-900 bg-opacity-50 p-6 rounded-xl">
              <h4 className="font-bold mb-2">Purchase Tokens</h4>
              <p>Buy tokens easily through our integrated payment system</p>
            </div>
            <div className="bg-pink-900 bg-opacity-50 p-6 rounded-xl">
              <h4 className="font-bold mb-2">Support Creators</h4>
              <p>Send tokens to your favorite creators during streams</p>
            </div>
            <div className="bg-pink-900 bg-opacity-50 p-6 rounded-xl">
              <h4 className="font-bold mb-2">Earn Rewards</h4>
              <p>Get exclusive benefits and rewards for using tokens</p>
            </div>
          </div>
        </div>
      </div>

      {/* Join Community Button */}
      <div className="flex justify-center" data-aos="fade-up">
        <button 
          className="relative group"
          onClick={() => window.open('https://your-community-link.com', '_blank')}
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
          <div className="relative px-12 py-4 bg-black rounded-full leading-none flex items-center">
            <span className="text-pink-400 group-hover:text-pink-300 transition duration-200">Join Our Community</span>
          </div>
        </button>
      </div>
    </section>
  );
};

export default HowStreamingWorks;