import React from 'react';
import { motion } from 'framer-motion';

const NotFound = () => {
  const handleGoHome = () => {
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-40 left-10 w-24 h-24 bg-accent/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl mx-auto"
        >
          {/* 404 Number */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-8"
          >
            <h1 className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-[#FFD700] to-[#B8860B] bg-clip-text text-transparent mb-4">
              404
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-[#FFD700] to-[#B8860B] mx-auto rounded-full shadow-lg" />
          </motion.div>

          {/* Error Message */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Page Not Found
            </h2>
            <p className="text-lg text-muted-foreground max-w-md mx-auto leading-relaxed">
              The page you're looking for seems to have vanished into the digital void. 
              Let's get you back to our premium AV & IT solutions.
            </p>
          </motion.div>

          {/* AV Equipment Icons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex justify-center items-center gap-8 mb-8">
              <div className="w-16 h-16 bg-[#FFD700]/20 rounded-2xl flex items-center justify-center">
                <span className="text-[#FFD700] text-2xl">📹</span>
              </div>
              <div className="w-20 h-20 bg-gradient-to-br from-[#FFD700]/30 to-[#B8860B]/20 rounded-3xl flex items-center justify-center">
                <span className="text-[#FFD700] text-3xl">🔧</span>
              </div>
              <div className="w-16 h-16 bg-[#FFD700]/20 rounded-2xl flex items-center justify-center">
                <span className="text-[#FFD700] text-2xl">💻</span>
              </div>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={handleGoHome}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#FFD700] to-[#B8860B] text-black font-semibold rounded-lg hover:from-[#B8860B] hover:to-[#FFD700] transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Back to Home
            </button>
            
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-3 px-8 py-4 border-2 border-[#FFD700]/30 text-[#FFD700] font-semibold rounded-lg hover:bg-[#FFD700]/10 hover:border-[#FFD700]/50 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Go Back
            </button>
          </motion.div>

          {/* Brand Message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="mt-16"
          >
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
              <h3 className="text-xl font-semibold text-[#FFD700] mb-4">
                The-Dia - Premium AV & IT Solutions
              </h3>
              <p className="text-muted-foreground">
                Transform your workspace with our smart infrastructure solutions for Zoom Rooms, 
                enterprise conferencing, and international service delivery.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Animation Elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#FFD700] rounded-full animate-ping" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-[#B8860B] rounded-full animate-ping" style={{ animationDelay: '3s' }} />
      <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-[#FFD700] rounded-full animate-ping" style={{ animationDelay: '2s' }} />
    </div>
  );
};

export default NotFound;
