'use client';
import QuotesSlider from '@/components/quotes';
import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const skills = [
  { name: 'Web Development', icon: '🌐' },
  { name: 'Artificial Intelligence', icon: '🤖' },
  { name: 'Personal Development Training', icon: '🚀' },
  { name: 'UI/UX Design', icon: '🎨' },
];

const roles = [
  'Full-Stack Engineer',
  'AI Enthusiast',
  'Trainer & Mentor',
  'UI/UX Lover',
];

function useCounter(target: number, enabled: boolean, durationMs = 1200) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!enabled) return;
    const start = performance.now();
    function tick(now: number) {
      const progress = Math.min((now - start) / durationMs, 1);
      setValue(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(tick);
    }
    const raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, enabled, durationMs]);
  return value;
}

export default function About() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const statsRef = useRef<HTMLDivElement | null>(null);
  const heroInView = useInView(heroRef, { once: true, margin: '-100px' });
  const statsInView = useInView(statsRef, { once: true, margin: '-100px' });

  const projectsCount = useCounter(14, statsInView);
  const studentsCount = useCounter(30, statsInView);
  const yearsCount = useCounter(4, statsInView);

  return (
    <main className="min-h-screen bg-gradient-to-tr from-indigo-900 via-black to-gray-900 text-white px-6 md:px-20 py-24">
      {/* Hero */}
      <section ref={heroRef} className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-4xl md:text-5xl font-extrabold mb-4"
              initial={{ opacity: 0, y: 10 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              About <span className="text-indigo-400">Me</span>
            </motion.h1>
            <motion.p
              className="text-lg text-gray-300 leading-relaxed mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Hello! I'm{' '}
              <span className="text-indigo-400 font-semibold">Haile Abebe</span>
              , blending technology and growth mindset to build meaningful
              solutions and empower others.
            </motion.p>

            {/* Dynamic Roles */}
            <div className="h-10 overflow-hidden mb-8">
              <motion.div
                key={heroInView ? 'roles' : ''}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300"
              >
                {roles.map((r, i) => (
                  <motion.span
                    key={r}
                    className="block"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + i * 0.8, duration: 0.6 }}
                  >
                    {r}
                  </motion.span>
                ))}
              </motion.div>
            </div>

            {/* CTA */}
            <div className="flex gap-4">
              <a
                href="/projects"
                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-md font-semibold transition"
              >
                View Projects
              </a>
              <a
                href="/contact"
                className="px-6 py-3 border border-indigo-600 hover:bg-indigo-600 hover:text-white rounded-md font-semibold transition"
              >
                Contact Me
              </a>
            </div>
          </motion.div>

          {/* Decorative / Parallax card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, rotate: 2 }}
            animate={heroInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative bg-gray-900/50 border border-indigo-700/30 rounded-2xl p-6 shadow-2xl"
          >
            <motion.div
              className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-indigo-500/20 via-purple-500/10 to-pink-500/20 blur-lg"
              aria-hidden
            />
            <div className="relative">
              <p className="text-gray-300 leading-relaxed">
                My journey started with web development, and expanded into
                artificial intelligence and training others to unlock their
                potential. I believe technology amplifies human potential.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section ref={statsRef} className="max-w-6xl mx-auto mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { label: 'Projects', value: projectsCount, suffix: '+' },
            { label: 'Students Mentored', value: studentsCount, suffix: '+' },
            { label: 'Years Experience', value: yearsCount, suffix: '+' },
          ].map((s) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="bg-gray-900/60 border border-indigo-700/30 rounded-xl p-6 text-center shadow-lg"
            >
              <div className="text-4xl font-extrabold text-indigo-400">
                {s.value}
                {s.suffix}
              </div>
              <div className="mt-1 text-gray-400 font-medium">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <motion.section
        className="max-w-6xl mx-auto mt-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-semibold mb-6 text-indigo-300 text-center">
          What I Do
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map(({ name, icon }) => (
            <motion.div
              key={name}
              className="bg-gray-800 rounded-lg p-6 flex items-center space-x-4 shadow-md hover:shadow-indigo-600/50 transition"
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <div className="text-4xl">{icon}</div>
              <div>
                <h3 className="text-lg font-semibold">{name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <div className="max-w-5xl mx-auto mt-16">
        <QuotesSlider />
      </div>
    </main>
  );
}
