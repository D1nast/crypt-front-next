'use client';

import React from "react";

const ScrollToTopButton: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to Top"
      className="fixed bottom-4 right-4 z-50 w-14 h-14 rounded-full border border-gray-200 bg-white/75 text-gray-600 shadow-lg flex items-center justify-center transition-colors hover:bg-gray-50 hover:text-gray-900 dark:border-gray-800 dark:bg-gray-950/75 dark:text-gray-400 dark:hover:bg-gray-900 dark:hover:text-gray-50 focus:outline-none"
      style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.15)" }}
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="19" x2="12" y2="5" />
        <polyline points="5 12 12 5 19 12" />
      </svg>
    </button>
  );
};

export default ScrollToTopButton; 