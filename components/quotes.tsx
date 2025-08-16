"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const quotes = [
  {
    text: "Growth is never by mere chance; it is the result of forces working together.",
    author: "James Cash Penney",
  },
  {
    text: "The only limit to our realization of tomorrow is our doubts of today.",
    author: "Franklin D. Roosevelt",
  },
  {
    text: "Personal development is the belief that you are worth the effort, time, and energy needed to develop yourself.",
    author: "Denis Waitley",
  },
  {
    text: "You don’t have to be great to start, but you have to start to be great.",
    author: "Zig Ziglar",
  },
];

export default function QuotesSlider() {
  const [current, setCurrent] = useState(0);
  const startX = useRef(0);

  // Auto-slide every 6 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % quotes.length);
    }, 6000);
    return () => clearTimeout(timer);
  }, [current]);

  function prevQuote() {
    setCurrent((prev) => (prev - 1 + quotes.length) % quotes.length);
  }

  function nextQuote() {
    setCurrent((prev) => (prev + 1) % quotes.length);
  }

  // Swipe handling for mobile
  function handleTouchStart(e) {
    startX.current = e.touches[0].clientX;
  }

  function handleTouchEnd(e) {
    const endX = e.changedTouches[0].clientX;
    const diff = startX.current - endX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextQuote(); // Swipe left → next
      } else {
        prevQuote(); // Swipe right → previous
      }
    }
  }

  return (
    <div
      className="max-w-3xl mx-auto mt-16 p-6 bg-gray-900 rounded-lg shadow-lg text-center relative select-none my-10"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <AnimatePresence mode="wait">
        <motion.blockquote
          key={current}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.6 }}
          className="text-lg italic text-gray-300 mb-4 min-h-[100px]"
        >
          “{quotes[current].text}”
        </motion.blockquote>
      </AnimatePresence>

      <p className="text-indigo-400 font-semibold mb-4">
        — {quotes[current].author}
      </p>

      {/* Navigation Buttons */}
      <div className="flex justify-center space-x-6">
        <button
          onClick={prevQuote}
          aria-label="Previous quote"
          className="bg-indigo-700 hover:bg-indigo-600 p-2 rounded-full transition flex items-center justify-center"
        >
          <ChevronLeft className="w-5 h-5 text-white" />
        </button>
        <button
          onClick={nextQuote}
          aria-label="Next quote"
          className="bg-indigo-700 hover:bg-indigo-600 p-2 rounded-full transition flex items-center justify-center"
        >
          <ChevronRight className="w-5 h-5 text-white" />
        </button>
      </div>
    </div>
  );
}
