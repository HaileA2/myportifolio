"use client";
import { motion, useInView } from "framer-motion";
import { Icon } from "lucide-react";
import { title } from "process";
import { useRef } from "react";

const timelineData = [
  {
    year: "1994 E.C. (2002 G.C.)",
    title: "🌱 Childhood & Early Schooling",
    content: [
      "I was born in a small village called Tumano Abdi, Salale, Oromia, Ethiopia. As a child, I was very funny and joyful, loved by my family and village.",
      "When my older brother finished preparatory school, he began tutoring kids in the village. Even though I was only 5 years old, I joined him. I was especially active in Mathematics.but after two months evryone went back to home.b/c no school in our village",
      "I stayed home for three years until a new school opened in our village.then 1999(Ec) I joined Grade 1, but my performance was weaker than before. Still, I struggled with hope and continued. till grade four i didn't undestand myself .till grade 4 i continued as a middle student"
    ],
    icon: "👶"
  },
  {
    year: "Grade 4",
    title: "🎯 A Turning Point",
    content: [
      "By Grade 4, my family's economic struggles forced my mother to stop me from studying. She sent me to work for my uncle. The next year, I returned and repeated Grade 4.",
      "One day, my teacher Tolosa Mangistu asked the class to say all the months of the year in English. Nobody could answer, but I knew the answer. Afraid but determined, I raised my hand, answered correctly, and received applause and appreciation.",
      "That day, I understood I was capable and clever. In the first semester, I ranked 4th in class. My teacher Lemma Legasa told me: 'How could you not be first? You are special.' Shocked, I decided from that day to be first in school. By the end of the year, I achieved it and won my first award, making my family proud.",
      "But after Grade 4, our village school ended. To continue, I walked two hours daily to a remote school for Grades 5 and 6. Even though I didn’t know Amharic well, I fought hard and ranked 3rd in as in amaharic language and ranked 2nd as  a class."
    ],
    icon: "⭐"
  },
  {
    year: "End of Greade 6",
    title: "Struggles After Grade 6",
    content: [
      "After finishing Grade 6, our economy broke down again. At 14 years old, I went to Fitche town, where a new teachers’ college was under construction, to look for work. At first, I was rejected because of my age.",
      "I even tried dangerous desert jobs, but couldn’t survive. Returning to Fitche, I begged again and was finally hired as a daily laborer for 35 birr per day. I worked among 250 men—no books, no pen, no school—just strength.",
      "Within a week, I became loved and respected by workers and managers. I supported drivers as a “redat” (assistant) and worked for one year. But in my heart, I always told myself “I am building my future class.” “I will one day lead this college.”“This is my future office.” ",

    ],
    icon: "⭐"
  },
  {
    year: "After One Year",
    title: "🌟Returning to School & Qero Revolution",
    content: [
      "The next year, I returned to school. My performance was good, and I met a strong friend, Abraham.",
      "But in 2008 E.C., during the Qeerroo Revolution (Masterplan protests), soldiers surrounded our school. As we tried to escape, Abraham was caught, but I escaped—saved by God. That incident changed me forever.",
      "My family then moved me to Gebre Guracha, which I call my second birthplace. Here, I felt life differently—friendship, laughter, and hope. At Gora School, I finished Grade 7 with 2nd rank.",
      "Irreecha 2009 E.C. & Restriction",

   "In 2009 E.C., after the tragic Irreecha at Bishoftu (Hora Harsade), we students at Gora School wanted to honor the Qeerroo. Out of 1,200 students, I and my friend Semere Andualem stood out.",
"As a result, I was restricted from Gora School and transferred to Gebre Guracha No. 3 Primary School. My uncle told teachers to watch me closely.",
"But here I met my lifelong friends:",

"Fira’ol Girma (now Medicine student, Haramaya University)",

"Dawa Temesgen (Law student, Addis Ababa University)",

"Addis Bayisa (my first crush )",

"From my brother Fraol, I learned how to score 100 in Mathematics, build friendships, and live well with teachers. I completed Grade 8 successfully."

     
    ],
    icon: "🚀"
  },
  {
    year:"High School (Grades 9–12)",
    title:"Learning Thinking For other",
    content:[
      "Together with my friends, I entered high school.",

"In Grade 9, I finished with the highest marks.",

"In Grade 10, my performance grew stronger. Some classmates hated and insulted me, but I turned negative energy into fuel and scored high in the National Exam.,",

"In the next year, a conflict with school leaders spread to the whole school. My uncle thought I was a politician, which hurt me. But with truth, we won respect from both students and teachers.",

"Our team—me, Fira’ol, Dawa, Shelam, Deribo, Ebisa,....—became the best volunteers of our school."
    ],
icon:"👀"
  },
  {
    year:"2013 /2022",
    title:"🌍 University Journey at Haramaya",
    content:[
      "In 2013 E.C. (2022 G.C.), I passed the Grade 12 National Exam with a total score of 515/700. This success opened the door for me to join Haramaya University, one of the greatest universities in Africa.",

"What made my life there happy and easier was that I was not alone. My brother and best friend, Firaol, also joined Haramaya with me. Our bond grew even stronger — we were not just friends and dormmates, but truly like brothers. For the whole first semester, we even shared one bed. While most dorms were filled with stress, endless assignments, and tension, our room was filled with laughter, joy, and love.",
"By the end of that semester, we surprised ourselves by scoring very high grades. Then, we each joined our passion:",
"I joined Software Engineering,",

"My brother Firaol joined Medicine.",
"That was the beginning of a new chapter. Our paths separated academically, but our brotherhood remained.",

"When I entered software engineering, I knew nothing about programming — not even the names or meanings of basic concepts. My first semester was the hardest time in my life, full of fear and confusion. But with the help of God and my teachers, I passed through that storm. Slowly, I built a strong foundation in programming fundamentals.",

"Over the years, my growth continued. I faced challenges, but each time, I came out stronger. Now, in my fourth-fifth year, I am proud to say I am not just a student, but a full-stack developer, exploring Artificial Intelligence and pushing my skills further.",

"What inspires me most is not only technology itself but also its connection to the human mind. My vision is clear:",
"➡️ To mentor my people, helping them discover their hidden skills and inner resources.",
"➡️ To use technology as a tool for building Ethiopia, and Africa as a whole.",
"➡️ To show others that with vision and determination, our future can be bright."
    ]
  

  }

];

export default function HistoryPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-black text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            My Journey
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            From a small village to shaping the future through technology and personal development
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 h-full rounded-full shadow-lg" />
          
          <div className="space-y-20">
            {timelineData.map((item, index) => (
              <TimelineItem 
                key={index} 
                item={item} 
                index={index} 
                isEven={index % 2 === 0}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-lg border border-indigo-500/30 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-indigo-300">
              Ready to Start Your Journey?
            </h3>
            <p className="text-gray-300 mb-6">
              Let's connect and explore how we can work together to achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-semibold transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
              <motion.a
                href="/projects"
                className="px-8 py-3 border border-indigo-600 hover:bg-indigo-600 hover:text-white rounded-lg font-semibold transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function TimelineItem({ item, index, isEven }: { item: any; index: number; isEven: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className={`flex items-center ${isEven ? 'flex-row' : 'flex-row-reverse'} gap-8 md:gap-16`}
    >
      {/* Content Card */}
      <motion.div 
        className={`flex-1 ${isEven ? 'md:text-right' : 'md:text-left'} text-center md:text-left`}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <div className="bg-gray-900/60 backdrop-blur-lg border border-indigo-500/30 rounded-2xl p-8 shadow-xl hover:shadow-indigo-500/20 transition-all duration-300">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-4xl">{item.icon}</span>
            <div>
              <h3 className="text-2xl font-bold text-indigo-300 mb-2">{item.title}</h3>
              <p className="text-indigo-400 font-semibold">{item.year}</p>
            </div>
          </div>
          <div className="space-y-4">
            {item.content.map((paragraph: string, pIndex: number) => (
              <motion.p
                key={pIndex}
                className="text-gray-300 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 + pIndex * 0.1 }}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Timeline Dot */}
      <motion.div
        className="relative z-10 flex-shrink-0"
        whileHover={{ scale: 1.2 }}
        transition={{ duration: 0.3 }}
      >
        <div className="w-6 h-6 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full border-4 border-black shadow-lg" />
        <motion.div
          className="absolute inset-0 w-6 h-6 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
        />
      </motion.div>

      {/* Spacer for mobile */}
      <div className="flex-1 md:hidden" />
    </motion.div>
  );
}
  