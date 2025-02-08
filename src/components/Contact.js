import React from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-20 text-center bg-teal-900">
      <h2 className="text-4xl font-bold text-orange-400">Contact Me</h2>
      <p className="text-gray-300 mt-4">
        Feel free to reach out via email or social media.
      </p>
      <div className="flex justify-center mt-6 space-x-6">
        <a
          href="https://www.linkedin.com/in/rayasam-amarnath/"
          className="text-blue-400 text-3xl hover:text-blue-500"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Rayasam3"
          className="text-gray-400 text-3xl hover:text-gray-500"
        >
          <FaGithub />
        </a>
        <a
          href="mailto:incredibles10987@gmail.com"
          className="text-red-400 text-3xl hover:text-red-500"
        >
          <FaEnvelope />
        </a>
      </div>
    </section>
  );
};

export default Contact;
