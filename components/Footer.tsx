"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Inter } from "next/font/google";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/HaileA2",
    svgPath: (
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.17c-3.338.724-4.042-1.61-4.042-1.61-.546-1.386-1.333-1.755-1.333-1.755-1.09-.745.083-.73.083-.73 1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.807 1.305 3.492.997.108-.775.418-1.305.76-1.605-2.665-.3-5.467-1.335-5.467-5.932 0-1.31.467-2.38 1.235-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 0 1 3-.404c1.02.004 2.045.138 3 .404 2.29-1.552 3.295-1.23 3.295-1.23.653 1.653.243 2.873.12 3.176.77.84 1.23 1.91 1.23 3.22 0 4.61-2.807 5.63-5.48 5.922.43.37.815 1.102.815 2.222v3.293c0 .32.218.694.825.576C20.565 21.795 24 17.298 24 12c0-6.63-5.37-12-12-12z" />
    ),
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/haileabebe",
    svgPath: (
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.024-3.037-1.852-3.037-1.854 0-2.137 1.445-2.137 2.939v5.667h-3.554V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.369-1.85 3.6 0 4.267 2.368 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.068-.926-2.068-2.067 0-1.142.924-2.068 2.068-2.068 1.142 0 2.067.926 2.067 2.068 0 1.141-.925 2.067-2.067 2.067zm1.777 13.019H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .77 0 1.72v20.56C0 23.23.792 24 1.771 24h20.451C23.2 24 24 23.23 24 22.28V1.72c0-.95-.8-1.72-1.775-1.72z" />
    ),
  },
  {
    name: "Twitter",
    href: "https://twitter.com/haileabebe",
    svgPath: (
      <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.724-.949.555-2.005.959-3.127 1.184-.897-.959-2.178-1.559-3.594-1.559-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.734.2-1.52.232-2.224.084.623 1.951 2.444 3.377 4.6 3.417-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.213 7.557 2.213 9.054 0 14-7.496 14-13.986 0-.21 0-.423-.015-.633.962-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
    ),
  },
  {
    name: "Facebook",
    href: "https://facebook.com/haileabebe", // replace with your link
    svgPath: (
      <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.351C0 23.403.597 24 1.325 24h11.497v-9.294H9.691V11.01h3.131V8.414c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24h-1.918c-1.505 0-1.797.716-1.797 1.765v2.316h3.591l-.467 3.696h-3.124V24h6.127C23.403 24 24 23.403 24 22.676V1.325C24 .597 23.403 0 22.675 0z" />
    ),
  },
  {
    name: "Telegram",
    href: "https://t.me/haileabebe", // replace with your username
    svgPath: (
      <path d="M12 0C5.373 0 0 5.373 0 12c0 5.076 3.163 9.385 7.594 11.047.556.102.76-.241.76-.537v-1.889c-3.093.674-3.74-1.488-3.74-1.488-.506-1.283-1.237-1.625-1.237-1.625-.995-.68.076-.667.076-.667 1.1.078 1.678 1.13 1.678 1.13.978 1.675 2.563 1.191 3.186.911.098-.707.383-1.191.698-1.465-2.468-.281-5.064-1.234-5.064-5.494 0-1.214.433-2.206 1.142-2.983-.114-.28-.497-1.403.106-2.922 0 0 .944-.302 3.09 1.179a10.79 10.79 0 0 1 2.7-.364c.918.003 1.842.125 2.7.364 2.146-1.481 3.088-1.179 3.088-1.179.605 1.519.222 2.642.108 2.922.711.777 1.14 1.769 1.14 2.983 0 4.27-2.6 5.21-5.073 5.488.392.338.743 1.009.743 2.033v3.01c0 .297.2.641.766.534C20.84 21.377 24 17.073 24 12c0-6.627-5.373-12-12-12z" />
    ),
  },
];

export default function Footer() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    function scrollHandler() {
      setShowTopBtn(window.pageYOffset > 300);
    }
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <footer className="bg-black text-gray-300 py-10 mt-20 relative">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-sm">&copy; {new Date().getFullYear()} Haile Abebe. All rights reserved.</p>

        <div className="flex space-x-8">
          {socialLinks.map(({ name, href, svgPath }) => (
            <motion.a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
              className="hover:text-indigo-500 transition"
              whileHover={{ scale: 1.3, rotate: 8 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.svg
                className="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
                aria-hidden="true"
                whileHover={{
                  boxShadow: "0px 0px 15px rgba(99,102,241,0.8)", // glowing effect
                }}
              >
                {svgPath}
              </motion.svg>
            </motion.a>
          ))}
        </div>
      </div>

      {showTopBtn && (
        <motion.button
          onClick={scrollToTop}
          aria-label="Back to top"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          whileHover={{ scale: 1.2, rotate: 360 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="fixed bottom-8 right-8 bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-full shadow-lg"
        >
          ↑
        </motion.button>
      )}
    </footer>
  );
}
