import React from 'react';
import { GraduationCap, Lightbulb, PlaneTakeoff, Phone, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  BiBulb,
  BiPaperclip,
  BiPaperPlane,
  BiPhone,
  BiSolidGraduation,
  BiSolidQuoteAltLeft,
  BiSolidQuoteAltRight,
  BiSpreadsheet,
} from "react-icons/bi";

import logo from '../../Imagesall/AspirationIasneetlogo.png'
import prevlogo from '../../Imagesall/logo.png'
import { BsLightbulb } from "react-icons/bs";
import { TfiQuoteLeft, TfiQuoteRight } from "react-icons/tfi";

function AboveFooter() {
  return (
    <div className=" mt-5 md:mt-10 lg:mt-20 relative">
      {/* First Section - What Aspiration Does */}
      <div className="pb_bg_dark max-w-screen-xl max-h-[200vh] mx-auto rounded-s-3xl p-4 sm:p-8">
        {/* Keeping the first section exactly as is */}
        <h2 className="text-2xl sm:text-4xl font-bold text-white md:my-2 sm:my-3">
          What an <span className="pb_text_ylw">Aspiration</span> Classroom
          Program does to you?
        </h2>
        <div className="relative my-2 sm:my-4">
          <span className="absolute z-0 top-0 left-4 sm:left-9 h-full border-dashed hidden md:block border-l-4 border-[var(--pb-ylw)]"></span>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3">
            <span className="relative">
              <BiSolidGraduation className="p-3 sm:p-4 w-16 sm:w-20 hidden md:block rounded-full h-16 sm:h-20 pb_bg_ylw pb_text_red" />
            </span>
            <p className="text-white text-base sm:text-lg">
              1. Structured Learning Path: Provides a clear, well-planned
              curriculum to guide you step by step through all topics.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 my-4 sm:my-6">
            <span className="relative">
              <BsLightbulb className="p-3 sm:p-4 w-16 sm:w-20 rounded-full hidden md:block h-16 sm:h-20 pb_bg_ylw pb_text_red" />
            </span>
            <p className="text-white text-base sm:text-lg">
              2. Conceptual Clarity: Focus on building a strong foundation in
              Physics, Chemistry, and Mathematics/Biology.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3">
            <span className="relative">
              <BiPaperPlane className="p-3 sm:p-4 w-16 sm:w-20 hidden md:block rounded-full h-16 sm:h-20 pb_bg_ylw pb_text_red" />
            </span>
            <p className="text-white text-base sm:text-lg">
              3. Regular Assessments: Continuous testing, including mock exams
              and weekly tests, ensures that you're well-prepared for real
              exams.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 my-4 sm:my-6">
            <span className="relative">
              <BiPaperPlane className="p-3 sm:p-4 w-16 sm:w-20 hidden md:block rounded-full h-16 sm:h-20 pb_bg_ylw pb_text_red" />
            </span>
            <p className="text-white text-base sm:text-lg">
              4. Doubt Resolution: Regular doubt-solving sessions to ensure you
              grasp every concept thoroughly.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-3">
            <span className="relative">
              <BiPaperPlane className="p-3 sm:p-4 w-16 sm:w-20 hidden md:block rounded-full h-16 sm:h-20 pb_bg_ylw pb_text_red" />
            </span>
            <p className="text-white text-base sm:text-lg">
              5. Time Management Skills: Helps you develop crucial skills to
              manage time efficiently during exams.
            </p>
          </div>
        </div>
      </div>

      {/* Merger Announcement Section - Updated for better responsiveness */}
      <div className="max-w-screen-xl mx-auto p-4 sm:p-8 bg-white border-r-4 border-b-4 rounded-ee-3xl border-dashed border-[var(--pb-ylw)] relative shadow-lg">
        <div className="flex flex-col md:flex-row gap-2 md:gap-8 items-center">
          {/* Left Company Logo */}
          <div className="w-full md:w-1/4 flex justify-center">
            <img
              className="rounded-se-3xl w-full max-w-[200px] md:max-w-[250px] object-cover"
              src={prevlogo}
              alt="Company Logo 1"
            />
          </div>

          {/* Center Content */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
            <div className="text-center md:text-left w-full mb-6">
             
            
            </div>
            
            <p className="text-base text-gray-700 leading-relaxed mb-6 text-center text-[8px] lg:text-[16px] md:text-left">
            With Aspiration IAS Academy as our foundation, we have built Aspiration JEE & NEET Academy to provide exceptional coaching for students aspiring to clear JEE and NEET. Our experienced faculty, who have guided numerous Civil Services aspirants to success, now bring their expertise to help JEE and NEET students achieve their goals. By combining a rigorous curriculum, personalized attention, and practical exam strategies, we ensure our students are equipped for success. Our online and offline learning modes cater to a diverse range of students, helping them prepare efficiently for these exams.
            </p>

            <div className="flex justify-center ml-[-10px] w-full">
              <Link 
                className="flex items-center gap-2 font-bold text-lg text-red-600 hover:text-red-800 transition duration-300 group" 
                to="/"
              >
                <Phone className="bg-yellow-200 text-red-600 w-10 h-10 rounded-full p-2 transition duration-300 group-hover:bg-yellow-300" />
                <span className="text-base sm:text-lg">+91 9998069806</span>
              </Link>
            </div>
          </div>

          {/* Right Company Logo */}
          <div className="w-full md:w-1/4 flex justify-center">
            <img
              className="rounded-se-3xl w-full max-w-[200px] md:max-w-[250px] object-cover"
              src={logo}
              alt="Company Logo 1"
            />
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <div className="pb_bg_red mt-8 sm:mt-[75px] relative py-6 sm:py-10">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-white text-lg sm:text-1xl font-medium text-center px-4">
            <p className='space-2'>
              <TfiQuoteLeft className="inline-block text-2xl sm:text-3xl mr-4" />
              Success in JEE and NEET is a journey of persistence and hard work. Every challenge faced today will prepare you for the victory tomorrow. Stay focused, remain positive, and keep pushing your limits to achieve your dreams
              <TfiQuoteRight className="inline-block text-2xl sm:text-3xl  ml-4" />
            </p>

            <h4 className="mt-2 sm:mt-4 mb-1 sm:mb-2 text-base sm:text-xl">
              ---- Aspiration JEE & NEET Academy
            </h4>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboveFooter;