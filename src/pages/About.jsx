import React from "react";
import { FaGraduationCap, FaBookOpen, FaUsers } from "react-icons/fa";

const About = () => {
  return (
    <section className="bg-[#F7FCFC] py-24 px-20">

      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-[#1f3b5c] mb-4">
          About Janajyoti Multiple Campus
        </h2>
        <p className="text-gray-500">
          Empowering students through quality education and innovation
        </p>
      </div>

      {/* Description */}
      <div className="mb-20 text-gray-600 leading-8 text-lg">
        <p className="mb-6">
          Janajyoti Multiple Campus is one of the leading educational
          institutions dedicated to providing high-quality education and
          fostering academic excellence. The campus offers a wide range of
          undergraduate and graduate programs designed to prepare students
          for professional success and lifelong learning.
        </p>

        <p className="mb-6">
          With experienced faculty members, modern teaching methodologies,
          and a supportive learning environment, the college focuses on both
          theoretical knowledge and practical skills. Students are encouraged
          to develop leadership, creativity, and critical thinking abilities.
        </p>

        <p>
          Our mission is to build competent, responsible, and innovative
          graduates who can contribute positively to society and the nation.
          Janajyoti Multiple Campus continues to be a center of academic growth,
          research, and community development.
        </p>
      </div>

      {/* Features */}
      <div className="flex justify-between text-center gap-10">

        <div className="bg-white p-10 rounded-xl shadow-md">
          <FaGraduationCap className="text-3xl text-teal-500 mx-auto mb-4" />
          <h3 className="font-semibold text-lg mb-2">Quality Education</h3>
          <p className="text-gray-500 text-sm">
            Professional courses guided by experienced teachers.
          </p>
        </div>

        <div className="bg-white p-10 rounded-xl shadow-md">
          <FaBookOpen className="text-3xl text-teal-500 mx-auto mb-4" />
          <h3 className="font-semibold text-lg mb-2">Modern Library</h3>
          <p className="text-gray-500 text-sm">
            Thousands of books and digital resources for learning.
          </p>
        </div>

        <div className="bg-white p-10 rounded-xl shadow-md">
          <FaUsers className="text-3xl text-teal-500 mx-auto mb-4" />
          <h3 className="font-semibold text-lg mb-2">Student Community</h3>
          <p className="text-gray-500 text-sm">
            Friendly environment with events and extracurricular activities.
          </p>
        </div>

      </div>

    </section>
  );
};

export default About;
