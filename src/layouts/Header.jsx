import React, { useState, useEffect, useContext } from "react";
import { BiCaretDown, BiMenu, BiX } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { videoContext } from "../components/ContextApi/HomePageVideoContext";

const Header = () => {
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const { setisclickoncoursecategory } = useContext(videoContext);
  const navigate = useNavigate();

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Navigate with context set
  function handleRoute(text) {
    setisclickoncoursecategory(text);
    navigate("/courses");
  }

  // Toggle courses in mobile
  const handleCoursesClick = () => {
    if (isMobile) {
      setIsCoursesOpen(!isCoursesOpen);
    }
  };

  return (
    <header className="pb_bg_ylw left-0 w-full z-[50] fixed top-[50px] shadow-md h-16">
      <div className="container max-w-7xl mx-auto flex justify-between items-center h-full relative px-4 lg:px-2">
        {/* Logo */}
        <Link className="relative z-10 flex items-center mt-[10px]" to={"/"}>
          <div className="bg-red-600 text-white rounded-b-2xl h-[80px] lg:h-[110px] px-2 lg:px-6 py-2 lg:py-4 text-center font-medium flex flex-col justify-center">
            <span className="block text-[14px] lg:text-[20px] mt-5">
              ASPIRATION
            </span>
            <span className="text-[12px] lg:text-[26px]">JEE & NEET</span>
            <span className="text-[10px] lg:text-[20px] mb-[10px]">ACADEMY</span>
          </div>
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-2xl z-20"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <BiX /> : <BiMenu />}
        </button>

        {/* Navigation */}
        <nav
          className={`lg:flex text-[18px] flex-col items-center lg:flex-row justify-center space-y-4 lg:space-y-0 lg:space-x-6 fixed lg:relative top-[110px] lg:top-0 left-0 w-full lg:w-auto pb_bg_ylw lg:bg-transparent shadow-md lg:shadow-none p-4 lg:p-0 z-[9] h-[calc(100vh-4rem)] lg:h-auto ${
            isMobileMenuOpen ? "block overflow-y-auto" : "hidden"
          } lg:flex`}
        >
          <Link
            to="/"
            className="hover:pb_text_red text-[20px] md:ml-1 font-medium block lg:inline-block"
          >
            Home
          </Link>

          {/* Courses Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => !isMobile && setIsCoursesOpen(true)}
            onMouseLeave={() => !isMobile && setIsCoursesOpen(false)}
          >
            <button
              onClick={handleCoursesClick}
              className="hover:pb_text_red cursor-pointer font-medium text-[20px] block lg:inline-block w-full text-left group"
            >
              Courses
              <BiCaretDown
                className={`inline-block transition-transform duration-300 ml-1 ${
                  isCoursesOpen ? "rotate-180" : ""
                } group-hover:scale-110`}
              />
            </button>

            {isCoursesOpen && (
              <div
                className={`${
                  isMobile
                    ? "relative w-full mt-2 bg-gray-50"
                    : "absolute left-0 top-[30px] ml-[-60px]"
                } z-20 bg-[#FFCC01] shadow-xl border rounded-lg p-4`}
              >
                <div
                  className={`flex flex-col lg:flex-row ${
                    isMobile ? "max-h-[40vh] overflow-y-auto" : ""
                  }`}
                >
                  <div className="w-full lg:w-48 min-w-[200px]">
                    <h3 className="text-lg font-semibold text-gray-700 px-4 py-2 border-b sticky top-0 bg-white">
                      Course Categories
                    </h3>
                    <ul className="mt-2 space-y-1 cursor-pointer">
                      <li
                        className="block px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors"
                        onClick={() => handleRoute("Classroom")}
                      >
                        Classroom
                      </li>
                      <li
                        className="block px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors"
                        onClick={() => handleRoute("Non Classroom")}
                      >
                        Non-Classroom
                      </li>
                      <li
                        className="block px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors"
                        onClick={() => handleRoute("Integrated Classroom")}
                      >
                        Integrated School Programme
                      </li>
                      <li
                        className="block px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors"
                        onClick={() => handleRoute("Online Course")}
                      >
                        Online Course
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link
            to="/why-choose-us"
            className="hover:pb_text_red text-[20px] md:ml-1 font-medium block lg:inline-block"
          >
            Why Choose Us 
          </Link>

          {/* Other Menu Links */}
          {[ "About", "Contact", "Download", "Scholarship"].map(
            (item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase().replace(/\s+/g, "")}`}
                className="hover:pb_text_red font-medium block text-[20px] lg:inline-block"
              >
                {item}
              </Link>
            )
          )}

          <Link
            to="/contact"
            className="mt-[10px] px-6 py-2 pb_bg_red text-white rounded-md hidden xl:block"
          >
            Enquiry Now
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
