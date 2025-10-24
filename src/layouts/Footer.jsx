import React from "react";
import { BiCaretRight } from "react-icons/bi";
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTwitterX,
  BsYoutube,
} from "react-icons/bs";
import { FaLocationPin } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import MenuAccordion from "../components/home/PopularMenuAccordion";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 z-[30]">
      <div className="w-full max-w-screen-xl mx-auto px-4 lg:px-8">
        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Company Info Section */}
          <div className="space-y-6 text-center md:text-left">
            <Link to="/" className="inline-block">
              <h2 className="text-white">
                <span className="block text-3xl font-semibold">Aspiration</span>
                <span className="block text-xl">JEE & NEET Academy </span>
              </h2>
            </Link>
            <p className="text-white/80 text-sm leading-relaxed">
            Aspiration JEE & NEET Academy is a premier coaching institute dedicated to empowering students with top-notch guidance, expert faculty, and result-driven strategies. Our meticulously designed programs, available both online and offline, ensure comprehensive preparation for JEE and NEET, helping aspirants achieve their dreams with excellence and confidence.
            </p>
          </div>

          {/* Popular Menus Section */}
          <div>
            <MenuAccordion />
          </div>

          {/* Follow Us & Address Section */}
          <div className="space-y-6 text-center md:text-left">
            {/* Social Media Links */}
            <div>
              <h5 className="text-white font-medium mb-4">Follow us on:</h5>
              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                {[
                  { Icon: BsFacebook, link: "#" },
                  { Icon: BsTwitterX, link: "#" },
                  { Icon: BsInstagram, link: "#" },
                  { Icon: BsLinkedin, link: "#" },
                  { Icon: BsYoutube, link: "#" },
                ].map(({ Icon, link }, index) => (
                  <Link
                    key={index}
                    to={link}
                    className="p-2 rounded-full bg-white text-gray-900 hover:bg-yellow-400 transition duration-300"
                  >
                    <Icon className="text-xl" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Address and Contact Info */}
            <div>
              <h4 className="text-white text-lg font-medium mb-4">Address:</h4>
              <div className="space-y-3 text-white/80">
                <div className="flex items-start gap-2 justify-center md:justify-start">
                  <FaLocationPin className="mt-1 hidden md:block flex-shrink-0 text-yellow-400" />
                  <span>
                    BC-16, Street Number 113, Action Area I, Newtown, Kolkata, WB 700163
                  </span>
                </div>
                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <IoCall className="text-yellow-400" />
                  <span> <a href="tel:+919998029802">+919998029802</a> <a href="tel:+919998069806 ">/ +919998069806 </a>  </span>
                </div>
                <a href="mailto:aspirationiasacademy@gmail.com" className="flex sm:hidden lg:flex items-center gap-2 justify-center  md:justify-start">
                  <MdEmail className="text-yellow-400" />
                  <span>aspirationiasacademy@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-8 pt-4 border-t border-white/20 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-white/80 text-sm">
            <div>
              © 2025{" "}
              <Link to="/" className="text-yellow-400 hover:underline">
                Aspiration JEE & NEET Academy 
              </Link>
              . All Rights Reserved.
            </div>
            <div>
              Designed & Developed by{" "}
              <Link
                to="https://kyleinfotech.co.in/"
                target="_blank"
                className="text-yellow-400 hover:underline"
              >
                Kyle Infotech
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
