'use client';
import Image from 'next/image';
import Projects from '@/components/project';
import ContactForm from '@/components/contactform';
import HistoryPage from '@/components/HistoryPage';
import QuotesSlider from '@/components/quotes';
import { motion } from 'framer-motion';
import Testimonials from '@/components/testimonial';
import { useState, useEffect } from 'react';

export default function Home() {
  // Animated text for hero
  const words = [
    'Full Stack Developer.',
    'UI/UX Designer.',
    'AI Enthusiast.',
    'Tech Mentor.',
    'Lifelong Learner.',
  ];
  const [currentWord, setCurrentWord] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const fullWord = words[currentWord];
    if (!deleting && displayed.length < fullWord.length) {
      timeout = setTimeout(
        () => setDisplayed(fullWord.slice(0, displayed.length + 1)),
        70,
      );
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(
        () => setDisplayed(fullWord.slice(0, displayed.length - 1)),
        40,
      );
    } else if (!deleting && displayed.length === fullWord.length) {
      timeout = setTimeout(() => setDeleting(true), 1200);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setCurrentWord((prev) => (prev + 1) % words.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, currentWord, words]);

  return (
    <div>
      <main className="relative min-h-screen bg-gradient-to-br from-[#1a0036] via-[#2d0b4e] to-black text-white flex flex-col md:flex-row items-center justify-center px-6 md:px-20 py-32 gap-16 overflow-hidden">
        {/* Animated Background Blobs */}
        <motion.div
          className="absolute top-0 left-0 w-[600px] h-[600px] bg-indigo-700 opacity-30 rounded-full blur-3xl -z-10 animate-pulse"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-900 opacity-20 rounded-full blur-2xl -z-10 animate-pulse"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }}
        />
        {/* Animated Image Section */}
        <motion.div
          className="w-80 h-80 bg-gradient-to-br from-indigo-900 via-purple-900 to-black rounded-3xl overflow-hidden border-4 border-indigo-700 shadow-2xl flex items-center justify-center hover:scale-105 hover:shadow-indigo-500/70 transition-transform duration-500"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          <Image
            src="/images/homepg.png"
            width={320}
            height={320}
            alt="Haile Abebe animated avatar"
            className="w-full h-full object-cover rounded-2xl shadow-lg hover:scale-105 hover:shadow-indigo-500/40 transition-all duration-500 ease-out"
          />
        </motion.div>
        {/* Text Content Section */}
        <motion.section
          className="max-w-2xl"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-lg">
            Hi, I'm <span className="text-indigo-400">Haile Abebe</span>
          </h1>
          <div className="h-16 mb-8">
            <span className="text-2xl md:text-3xl font-bold text-indigo-300 flex items-center">
              <motion.span
                key={currentWord}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="inline-block"
              >
                {displayed}
                <span className="animate-pulse">|</span>
              </motion.span>
            </span>
          </div>
          <p className="text-lg md:text-xl mb-8 leading-relaxed text-gray-300 drop-shadow">
            I build beautiful, performant web apps and love empowering others
            through tech and personal growth.
          </p>
          <div className="flex flex-wrap gap-4 mb-2">
            <a
              href="/Myhistory"
              className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg shadow-lg hover:from-indigo-700 hover:to-purple-700 transition font-semibold text-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 flex items-center gap-2"
            >
              📚 My History
            </a>
            <a
              href="https://t.me/WadabM"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border-2 border-indigo-500 rounded-lg hover:bg-indigo-600 hover:text-white transition font-semibold text-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 flex items-center gap-2"
            >
              💬 Contact Me
            </a>
          </div>
        </motion.section>
      </main>
      <Projects />
      <QuotesSlider />
      <Testimonials />
      <ContactForm />
    </div>
  );
}
