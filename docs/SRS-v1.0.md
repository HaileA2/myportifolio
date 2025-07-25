📘 Software Requirements Specification (SRS)
Project Name:
Haile Abebe – Intelligent & Interactive Developer Portfolio
(A full-stack portfolio built using Next.js and NestJS, unlike any typical portfolio site. Focuses on creativity, automation, storytelling, and interactivity.)

Version: v1.0
Author: Haile Abebe
Date: July 2025
✅ 1. Introduction
This SRS outlines the goals, functional and non-functional requirements, tech stack, user types, and future roadmap of Haile Abebe’s personal developer portfolio, uniquely designed with creativity, intelligence, and automation. This is not a traditional portfolio — it will evolve into a living product.
✅ 2. Objectives (v1.0)
Build the foundation of the portfolio using Next.js (frontend) and Tailwind CSS

Display:

Personal introduction

Background and motivation

Project showcase (static for now)

Add a working contact form UI

Prepare for backend integration using NestJS in the next version

Deploy on Vercel for global access

✅ 3. Functional Requirements
🔹 3.1 Home Page
Hero section with name, image, and a strong tagline

Call to action (e.g., "Explore My Work")

Smooth scroll or transition to next sections

🔹 3.2 About Page
Personal bio

Timeline: education, experiences, turning points

A section on your vision as a personal development trainer

🔹 3.3 Projects Page
List 3–5 important projects

Each with:

Title

Description

Tools used (icons/logos)

Image or video demo (local or Cloudinary-hosted)

🔹 3.4 Contact Page
Simple form with fields:

Name

Email

Message

For now, data is logged locally (no backend yet)

✅ 4. Non-Functional Requirements
⚡ Loads in under 2 seconds

📱 Fully responsive (mobile, tablet, desktop)

🌐 Hosted on Vercel

🎨 Clean UI with consistent Tailwind theme

✨ Uses Framer Motion for smooth animations

🚫 No backend logic in this version

✅ 5. Tech Stack
Layer	Tools
Frontend	Next.js, Tailwind CSS, Framer Motion
Design	Canva or Figma (optional)
Media Hosting	Cloudinary (images, GIFs)
Backend (placeholder)	NestJS – coming in v2
Deployment	Vercel

✅ 6. User Roles
User	Permissions
Visitor (public)	View pages, submit contact form (UI only)
Admin (You – Haile)	Not yet implemented (coming in v2)

✅ 7. Design Mockups
For now, wireframes and designs will be planned in Canva or Figma. You can export them to assist in layout planning.

✅ 8. Deployment
The portfolio will be deployed at:
https://haileabebe.vercel.app (example)

Continuous Deployment via GitHub → Vercel

✅ 9. Limitations (in v1.0)
Contact form is static (not connected to backend)

No dynamic content management yet

No admin dashboard or secure login

AI chatbot and data dashboard are planned for later

✅ 10. Future Roadmap (v2+ Highlights)
Version	Feature
v2.0	Integrate NestJS backend, dynamic project CRUD, contact form API
v2.1	Admin dashboard with authentication
v3.0	GPT-powered chatbot trained on your portfolio
v3.1	Real-time dashboard of GitHub/learning stats
v4.0	Gamified or story-based navigation
v5.0	Fully multilingual: Afaan Oromo, Amharic, English

🔚 Summary
This SRS defines the foundation for a unique, intelligent, and powerful portfolio designed to showcase not just your skills, but your growth, vision, and creativity. It sets the groundwork for future enhancements with AI, automation, and backend logic.

