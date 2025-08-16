"use client";
import QuotesSlider from "@/components/quotes";
import { motion } from "framer-motion";

const skills = [
  { name: "Web Development", icon: "🌐" },
  { name: "Artificial Intelligence", icon: "🤖" },
  { name: "Personal Development Training", icon: "🚀" },
  { name: "UI/UX Design", icon: "🎨" },
];

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-tr from-indigo-900 via-black to-gray-900 text-white px-6 md:px-20 py-20">
      <motion.section
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-extrabold mb-8 text-indigo-400 text-center">
          About Me
        </h1>

        <p className="mb-6 text-lg leading-relaxed text-gray-300">
          Hello! I'm <strong className="text-indigo-500">Haile Abebe</strong>, a passionate software engineer and personal development advocate based in Ethiopia.  
          I love blending technology and growth mindset to build meaningful solutions and empower others.  
          My journey started with web development, but my curiosity led me to dive deep into artificial intelligence and training people on unlocking their true potential.
        </p>

        <p className="mb-6 text-lg leading-relaxed text-gray-300">
          I believe technology is a powerful tool to amplify human potential, and through personal development, we can achieve extraordinary growth in every aspect of life.  
          My mission is to inspire, create, and teach — whether through code or coaching.
        </p>

        {/* Skills Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6 text-indigo-300 text-center">
            What I Do
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {skills.map(({ name, icon }) => (
              <motion.div
                key={name}
                className="bg-gray-800 rounded-lg p-6 flex items-center space-x-4 shadow-md hover:shadow-indigo-600 transition cursor-default"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl">{icon}</div>
                <div>
                  <h3 className="text-xl font-semibold">{name}</h3>
                  {/* Optional description for each skill */}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <QuotesSlider />
      </motion.section>
    </main>
  );
}
