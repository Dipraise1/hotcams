// src/components/About.jsx
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="py-20 px-4 bg-black/40">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          data-aos="fade-up"
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-4xl font-bold text-pink-200 mb-6">About Us</h2>
            <p className="text-lg text-pink-100 mb-8">
              We are revolutionizing digital entertainment through blockchain technology 
              and innovative streaming solutions. Our platform provides unparalleled 
              opportunities for creators and audiences alike.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-pink-600/20 to-red-600/20 p-4 rounded-lg backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-pink-200 mb-2">1000+</h3>
                <p className="text-pink-100">Active Creators</p>
              </div>
              <div className="bg-gradient-to-br from-pink-600/20 to-red-600/20 p-4 rounded-lg backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-pink-200 mb-2">24/7</h3>
                <p className="text-pink-100">Live Support</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 h-[500px]">
            {/* Main large image */}
            <div className="relative col-span-2 h-64 overflow-hidden rounded-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/30 to-red-500/30 z-10" />
              <img 
                src="/images/photo_2022-11-09 22.06.24.jpeg" 
                alt="Featured Creator" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            {/* Smaller images */}
            <div className="relative h-48 overflow-hidden rounded-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/30 to-red-500/30 z-10" />
              <img 
                src="/images/photo_2022-11-09 22.06.24.jpeg" 
                alt="Creator 2" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative h-48 overflow-hidden rounded-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/30 to-red-500/30 z-10" />
              <img 
                src="/images/photo_2022-11-09 22.06.24.jpeg" 
                alt="Creator 3" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Floating stats container */}
            <div className="absolute -right-4 bottom-16 bg-gradient-to-r from-pink-900/90 to-red-900/90 p-4 rounded-lg shadow-xl backdrop-blur-sm transform rotate-3 z-20">
              <div className="text-pink-200 text-sm font-medium">Monthly Revenue</div>
              <div className="text-white text-2xl font-bold">$50K+</div>
            </div>
          </div>
        </motion.div>

        {/* Additional Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          {[
            {
              title: "Secure Payments",
              description: "Instant crypto transactions with minimal fees"
            },
            {
              title: "HD Streaming",
              description: "High-quality content delivery worldwide"
            },
            {
              title: "Creator Tools",
              description: "Professional suite of streaming tools"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-gradient-to-br from-pink-900/30 to-red-900/30 p-6 rounded-lg backdrop-blur-sm"
            >
              <h3 className="text-xl font-bold text-pink-200 mb-3">{feature.title}</h3>
              <p className="text-pink-100">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;