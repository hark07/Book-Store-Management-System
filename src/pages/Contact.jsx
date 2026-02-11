import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import campusImg from "../assets/jmc.jpg"; // Make sure this path is correct

const Contact = () => {
  return (
    <section className="bg-[#F7FCFC] py-24 px-20">
      <div className="flex items-start gap-20">
        {/* LEFT SIDE - IMAGE */}
        <div className="flex-1">
          <img
            src={campusImg}
            alt="Janajyoti Multiple Campus"
            className="w-full h-[500px] object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* RIGHT SIDE - DETAILS */}
        <div className="flex-1">
          <h2 className="text-4xl font-bold text-[#1f3b5c] mb-6">
            Contact Janajyoti Multiple Campus
          </h2>

          <p className="text-gray-600 leading-7 mb-10">
            We are always happy to assist students, parents, and visitors. Feel
            free to contact us for admission inquiries, academic information, or
            any support related to campus activities.
          </p>

          {/* Contact Info */}
          <div className="space-y-5 mb-10 text-gray-700">
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-teal-500" />
              <span>Janajyoti Multiple Campus, Nepal</span>
            </div>

            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-teal-500" />
              <span>+977 01-1234567</span>
            </div>

            <div className="flex items-center gap-4">
              <FaEnvelope className="text-teal-500" />
              <span>info@janajyoticampus.edu.np</span>
            </div>
          </div>

          {/* Contact Form */}
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border rounded outline-none"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border rounded outline-none"
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full p-3 border rounded outline-none"
            ></textarea>

            <button className="bg-teal-500 text-white px-8 py-3 rounded hover:bg-teal-600">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
