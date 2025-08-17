"use client";
import Image from "next/image";
import Projects from "@/components/project";
import ContactForm from "@/components/contactform";
import QuotesSlider from "@/components/quotes";
import { motion } from "framer-motion";
import Testimonials from "@/components/testimonial";

export default function Home() {
  return (
    <div>
    <main className="min-h-screen bg-gradient-to-r from-purple-900 via-indigo-900 to-black text-white flex flex-col md:flex-row items-center justify-center px-6 md:px-20 py-20 gap-10">
      {/* Animated Image Section */}
      <motion.div
      className=" w-70   
    h-100      
    bg-gray-900
    rounded-lg
    overflow-hidden
    border-2 border-indigo-600
    shadow-md
    transition-transform
    duration-300
    ease-in-out
    hover:scale-105
    hover:shadow-indigo-500/70
  "
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
    
        <Image
          src="/images/homepage.png"
          width={500}
          height={500}
          alt="Haile Abebe animated avatar"
          className="w-full h-full object-cover hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/40 hover:rotate-2 transition-all duration-500 ease-out rounded-2xl overflow-hidden"
        />
      </motion.div>

      {/* Text Content Section */}
      <motion.section
        className="max-w-xl"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
          Hello, I'm <span className="text-indigo-400">Haile Abebe</span>
        </h1>

        <p className="text-lg md:text-xl mb-6 leading-relaxed text-gray-300">
          I am passionate about <strong className="text-indigo-500">personal development</strong> and technology.  
          I believe growth happens when we challenge ourselves — in life and code.
        </p>

        <p className="mb-8 text-gray-400">
          Exploring <span className="font-semibold text-indigo-400">AI</span>, web development, and training others to unlock their potential is my mission.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="/projects"
            className="px-6 py-3 bg-indigo-600 rounded-md hover:bg-indigo-700 transition font-semibold"
          >
            Explore My Work
          </a>
          <a
            href="/contact"
            className="px-6 py-3 border border-indigo-600 rounded-md hover:bg-indigo-600 hover:text-white transition font-semibold"
          >
            Get in Touch
          </a>
        </div>
      </motion.section>
     
    </main>
     <Projects/>
      <QuotesSlider/>
      <Testimonials/>
      <ContactForm/>
    </div>
  );
}
