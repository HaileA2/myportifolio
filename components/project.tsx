"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "AI Chatbot Assistant",
    description: "An AI-powered chatbot built with Next.js, OpenAI API, and Tailwind CSS.",
    image: "/projects/chatbot.png",
    link: "https://github.com/username/chatbot",
    tech: ["Next.js", "Tailwind", "OpenAI API"]
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio showcasing design, development, and AI projects.",
    image: "/projects/portfolio.png",
    link: "https://myportfolio.com",
    tech: ["Next.js", "Framer Motion", "Vercel"]
  },
  {
    title: "E-Commerce Store",
    description: "Full-stack e-commerce store with payment integration and admin panel.",
    image: "/projects/store.png",
    link: "https://github.com/username/store",
    tech: ["Next.js", "Stripe", "MongoDB"]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-white mb-12"
        >
          My <span className="text-indigo-500">Projects</span>
        </motion.h2>

        {/* Project Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-indigo-500/40 transition-shadow"
            >
              <div className="relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-indigo-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-indigo-600 transition-colors"
                  >
                    View Project
                  </a>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <p className="text-gray-400 mt-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-sm bg-gray-800 text-indigo-400 px-2 py-1 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
