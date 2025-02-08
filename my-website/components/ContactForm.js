"use client";

import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    fetch("https://formspree.io/f/xbldkpgq", {  // Your Formspree endpoint
      method: "POST",
      body: formData,
      headers: { "Accept": "application/json" },
    })
      .then((response) => {
        if (response.ok) {
          setSubmitted(true);
          e.target.reset();
        } else {
          alert("Error sending message. Try again later.");
        }
      })
      .catch(() => alert("Error sending message. Check your network."));
  };

  return (
    <section id="contact" className="p-16 bg-black text-center">
      <h2 className="text-4xl font-bold text-white">Contact Me</h2>
      
      {submitted ? (
        <p className="text-green-400 mt-4">Message sent! I'll get back to you soon.</p>
      ) : (
        <form onSubmit={handleSubmit} className="mt-6 max-w-lg mx-auto bg-gray-900 p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <label className="block text-white text-left mb-2">Your Name</label>
            <input type="text" name="name" required className="w-full p-3 rounded bg-gray-800 text-white" />
          </div>
          <div className="mb-4">
            <label className="block text-white text-left mb-2">Your Email</label>
            <input type="email" name="email" required className="w-full p-3 rounded bg-gray-800 text-white" />
          </div>
          <div className="mb-4">
            <label className="block text-white text-left mb-2">Message</label>
            <textarea name="message" required className="w-full p-3 rounded bg-gray-800 text-white"></textarea>
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-400 text-white font-bold px-4 py-2 rounded-lg">
            Send Message
          </button>
        </form>
      )}
    </section>
  );
}
