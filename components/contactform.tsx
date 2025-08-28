"use client";

import { useState } from "react";
import { FaTelegram, FaYoutube, FaTiktok, FaFacebook, FaInstagram } from "react-icons/fa";

type FormFields = { name: string; email: string; message: string };
type FormErrors = Partial<FormFields>;

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [success, setSuccess] = useState(false);

  function validate() {
    const errs: FormErrors = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) {
      errs.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email)
    ) {
      errs.email = "Invalid email address";
    }
    if (!form.message.trim()) errs.message = "Message is required";
    return errs;
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>
  ) {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccess(false);
      return;
    }
    setErrors({});
    setSuccess(true);

    // TODO: Add your submit logic here (e.g. send to backend or email API)

    // Clear form
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <div className="max-w-lg mt-30 mx-auto">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 p-8 rounded shadow-md"
        noValidate
      >
        <h2 className="text-2xl font-semibold mb-6 text-white text-center">
          Contact Me
        </h2>

        <div className="mb-4">
          <label htmlFor="name" className="block mb-1 text-gray-300">
            Name
          </label>
          <input
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            className={`w-full px-4 py-2 rounded bg-gray-800 border ${
              errors.name ? "border-red-500" : "border-gray-700"
            } text-white focus:outline-none focus:ring-2 focus:ring-indigo-500`}
            placeholder="Your name"
            autoComplete="name"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block mb-1 text-gray-300">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            className={`w-full px-4 py-2 rounded bg-gray-800 border ${
              errors.email ? "border-red-500" : "border-gray-700"
            } text-white focus:outline-none focus:ring-2 focus:ring-indigo-500`}
            placeholder="your.email@example.com"
            autoComplete="email"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block mb-1 text-gray-300">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={5}
            className={`w-full px-4 py-2 rounded bg-gray-800 border ${
              errors.message ? "border-red-500" : "border-gray-700"
            } text-white focus:outline-none focus:ring-2 focus:ring-indigo-500`}
            placeholder="Your message"
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 transition py-3 rounded text-white font-semibold"
        >
          Send Message
        </button>

        {success && (
          <p className="mt-4 text-green-500 text-center">
            Thank you! Your message has been sent.
          </p>
        )}
      </form>

      {/* Social Media Card */}
      <div className="bg-gray-800 mt-8 p-6 rounded-2xl shadow-md text-center">
        <h3 className="text-xl font-semibold text-white mb-4">Follow Me</h3>
        <div className="flex justify-center gap-6 text-2xl text-gray-300">
          <a href="https://t.me/factsooradhu" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <FaTelegram />
          </a>
          <a href="https://www.youtube.com/@HaileAbebe-qj5df" target="_blank" rel="noopener noreferrer" className="hover:text-red-500">
            <FaYoutube />
          </a>
          <a href="https://www.tiktok.com/@hyleeab?_t=ZM-8zER35jrzdA&_r=1" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
            <FaTiktok />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61555539494821" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
            <FaFacebook />
          </a>
          <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
}
