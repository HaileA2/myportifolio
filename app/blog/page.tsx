"use client";

import { motion } from "framer-motion";

const blogPosts = [
  {
    title: "How I Transitioned from Web Development to AI",
    date: "August 5, 2025",
    description:
      "Sharing my journey from building websites to creating AI-powered solutions, and the lessons I learned along the way.",
    image: "/images/web2ai.png",
    slug: "web-to-ai"
  },
  {
    title: "My Favorite Tools for Personal Development",
    date: "July 20, 2025",
    description:
      "A curated list of apps, books, and techniques that have helped me grow both as a developer and as a person.",
    image: "/images/webtools.jpg",
    slug: "personal-development-tools"
  },
  {
    title: "Building My Special Portfolio",
    date: "July 10, 2025",
    description:
      "Behind the scenes of designing and developing the portfolio you’re looking at right now.",
    image: "/images/portifo.jpg",
    slug: "portfolio-story"
  }
];

export default function BlogPage() {
  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12"
        >
          My <span className="text-indigo-500">Blog</span>
        </motion.h1>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.a
              href={`/blog/${post.slug}`}
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-indigo-500/40 transition-shadow"
            >
              <div className="overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-400">{post.date}</p>
                <h2 className="text-xl font-semibold mt-2 group-hover:text-indigo-400 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-300 mt-3 text-sm">
                  {post.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
