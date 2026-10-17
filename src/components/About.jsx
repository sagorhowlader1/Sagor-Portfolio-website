"use client";

import {
  Mail,
} from "lucide-react";
import { FaBookOpen, FaCode, FaFacebook, FaLinkedin, FaUsers, FaWhatsapp } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { HiOutlineLightBulb } from "react-icons/hi";
import { PiTargetBold } from "react-icons/pi";

const About = () => {

  return (
    <section
      id="about"
      className="relative min-h-screen overflow-hidden bg-[#0F3040] py-24 select-none font-poppins text-white"
    >

      <div className="container-safe relative z-10 mx-auto max-w-6xl px-5 sm:px-8">
        {/* ================= Section Header ================= */}
        <div
          className="text-center  max-w-3xl mx-auto mb-16 transition-all duration-700 ease-out opacity-100 translate-y-0 opacity-0 translate-y-6"
        >

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-10 text-white">
            About Me
          </h2>

          <p className="mt-4 text-sm sm:text-base text-gray-400 leading-relaxed max-w-2xl mx-auto">

            I am a Passionate and dedicated Full-Stack Web Developer with a strong interest in building modern, responsive and user-friendly web applications. I enjoy turning ideas into functional digital experiences through clean code, thoughful design and continuous learning.
          </p>
        </div>


        <div className="flex flex-col mb-20">
          <div className="grid grid-cols-3 gap-6">
            <h3 className="flex gap-2 font-bold text-xl text-gray-400"><HiOutlineLightBulb size={25} /> Problem Solver</h3>
            <h3 className="flex gap-2 font-bold text-xl text-gray-400"> <PiTargetBold size={25} /> Detail Oriented</h3>
            <h3 className="flex gap-2 font-bold text-xl text-gray-400"><FaCode size={25} /> Clean Code</h3>
            <h3 className="flex gap-2 font-bold text-xl text-gray-400"><FaBookOpen size={25} />Always Learning</h3>
            <h3 className="flex gap-2 font-bold text-xl text-gray-400"><FaUsers size={25} /> Team Player</h3>
            <h3 className="flex gap-2 font-bold text-xl text-gray-400"><HiOutlineLightBulb size={25} />Curlous Mind</h3>
          </div>
        </div>


        {/* Right Content */}
        <div className="flex flex-col items-start md:items-center gap-3">
          <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
            Follow Me
          </p>
          <div className="flex items-center gap-3">

            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/fuad-al-maimun-97ba42399/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2.5 rounded-full border border-white/10 bg-white/5 text-gray-400 hover:text-white hover:bg-purple-600/20 hover:border-purple-500/30 transition-all duration-300">
              <FaLinkedin size={17} />
            </a>

            {/* Email */}
            <a href="mailto:sagorhowlader.edu@gmail.com" aria-label="Email" className="p-2.5 rounded-full border border-white/10 bg-white/5 text-gray-400 hover:text-white hover:bg-purple-600/20 hover:border-purple-500/30 transition-all duration-300">
              <Mail size={17} />
            </a>

            {/* Facebook */}
            <a href="https://www.facebook.com/sagorhowlader1" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="p-2.5 rounded-full border border-white/10 bg-white/5 text-gray-400 hover:text-white hover:bg-purple-600/20 hover:border-purple-500/30 transition-all duration-300">
              <FaFacebook size={17} />
            </a>


            {/* LeetCode */}
            <a href="https://leetcode.com/u/sagorhowlader1/" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="p-2.5 rounded-full border border-white/10 bg-white/5 text-gray-400 hover:text-white hover:bg-purple-600/20 hover:border-purple-500/30 transition-all duration-300">
              <SiLeetcode size={17} />
            </a>


            {/* WhatsApp */}
            <a href="https://wa.link/sk5mhk" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="p-2.5 rounded-full border border-white/10 bg-white/5 text-gray-400 hover:text-white hover:bg-purple-600/20 hover:border-purple-500/30 transition-all duration-300">
              <FaWhatsapp size={17} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;