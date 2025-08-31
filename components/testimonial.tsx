'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Firaol Girma',
    role: 'Medicine, Haramaya University',
    quote:
      'Working with Haile was an absolute pleasure. His blend of creativity and technical skill is unmatched.',
    image: '/images/firaol.jpg',
  },
  {
    name: 'Dawa Tamasgen',
    role: 'Lawer, Addis Ababa University',
    quote:
      'Haile’s dedication to Tech and personal growth shows in every project. A true innovator.',
    image: '/images/dawa.jpg',
  },
  {
    name: 'Atinaol Getachew',
    role: 'Family Banker at Jigjiga',
    quote:
      'From design to deployment, Haile delivered beyond expectations. Highly recommended.',
    image: '/images/atinaol.jpg',
  },
  {
    name: 'Meti Yonas',
    role: 'Software Engineer, Haramaya University',
    quote:
      'Haile’s passion for technology and personal development is inspiring. He’s a great mentor and collaborator.',
    image: '/images/meti.jpg',
  },
  {
    name: 'Galasa Jarso',
    role: 'Software Engineer, Haramaya University',
    quote:
      'Haile’s insights into personal growth and technology have transformed my approach to business.',
    image: '/images/galasa.jpg',
  },
  {
    name: 'Kulani Yewalishet',
    role: 'Software Engineer, Bule Hora University',
    quote:
      'Haile’s expertise in AI and web development is impressive. He’s a valuable asset to any team.',
    image: '/images/kulani.jpg',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-white mb-12"
        >
          What <span className="text-indigo-500">People Say</span>
        </motion.h2>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-indigo-500/40 transition-shadow"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-indigo-500"
                />
                <div>
                  <h3 className="text-lg font-semibold text-white">{t.name}</h3>
                  <p className="text-sm text-gray-400">{t.role}</p>
                </div>
              </div>
              <p className="text-gray-300 mt-4 italic">"{t.quote}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
