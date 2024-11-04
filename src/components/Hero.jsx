import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.scrollY);
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);

    checkMobile();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <div className="relative min-h-[200vh] bg-black">
      {/* First Hero Section */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* 3D Transform Container */}
        <div 
          className="relative h-full transform-gpu"
          style={{
            transform: `perspective(1000px) rotateX(${mousePosition.y * 0.02}deg) rotateY(${mousePosition.x * 0.02}deg)`
          }}
        >
          {/* Background Video Layer */}
          <div className="absolute inset-0 z-0">
            {isMobile ? (
              <img
                src="/images/photo_2022-11-09 22.06.24.jpeg"
                alt="Background"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="relative w-full h-full">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-pink-900/80 mix-blend-multiply" />
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/images/IMG_9436-2.MOV" type="video/mov" />
                </video>
              </div>
            )}
          </div>

          {/* Floating Elements */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-8 h-8 bg-white/10 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  transform: `translateZ(${i * 10}px)`,
                  animation: `float ${5 + i * 0.5}s infinite ease-in-out`
                }}
              />
            ))}
          </div>

          {/* Main Content */}
          <div className="relative h-full flex items-center justify-between px-8 lg:px-16">
            {/* Left Content */}
            <div 
              className="w-1/2 transform-gpu"
              style={{
                transform: `translateZ(50px) translateX(${-mousePosition.x * 0.5}px)`
              }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                Experience The Future
              </h1>
              <p className="text-lg lg:text-xl text-pink-200 mb-8 max-w-md">
                Immerse yourself in a new dimension of digital experiences
              </p>
              <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-full hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
            </div>

            {/* Right Content - 3D Image */}
            <div 
              className="hidden lg:block w-1/2 transform-gpu"
              style={{
                transform: `translateZ(100px) translateX(${mousePosition.x * 0.5}px) rotateY(${-mousePosition.x * 0.05}deg)`
              }}
            >
              <img
                src="/images/photo_2022-11-09 22.06.24.jpeg"
                alt="Featured"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>

          {/* Floating Gradient Orbs */}
          <div 
            className="absolute top-1/4 right-1/4 w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-xl opacity-30"
            style={{
              transform: `translateZ(30px) translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)`
            }}
          />
          <div 
            className="absolute bottom-1/4 left-1/4 w-40 h-40 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl opacity-30"
            style={{
              transform: `translateZ(20px) translate(${-mousePosition.x * 0.2}px, ${-mousePosition.y * 0.2}px)`
            }}
          />
        </div>
      </div>

      {/* Second Hero Section (Revealed on Scroll) */}
      <div className="relative h-screen bg-gradient-to-b from-black to-purple-900 flex items-center justify-center px-8">
        <div className="text-center">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Continue The Journey
          </h2>
          <p className="text-lg lg:text-xl text-purple-200 mb-8 max-w-2xl mx-auto">
            Scroll to discover more amazing features and possibilities
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </div>
  );
};

export default Hero;