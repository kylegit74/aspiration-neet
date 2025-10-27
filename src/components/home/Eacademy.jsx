import React, { useContext } from "react";
import { BiChevronRight } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { videoContext } from "../ContextApi/HomePageVideoContext";

const Eacademy = () => {
  const {setCategory}=useContext(videoContext)
  const  navigate=useNavigate()
   function handleNavigate()
   {
    setCategory([])
    navigate('/courses')
   }

  return (
    <>
      <div className="pb_bg_ylw">
        <div className="container max-w-7xl px-4 mx-auto py-10 flex flex-col lg:flex-row items-center justify-between">
          <div className="w-full lg:w-2/5 z-[10px]">
            <h2 className="font-bold text-2xl lg:text-4xl">
              Aspiration <span className="pb_text_red">Online Campus </span>
            </h2>
            <p className="my-4">
              Aspiration Digital Campus is an advanced online classroom program,
              designed to run parallel to offline batches, ensuring seamless,
              high-quality learning anytime, anywhere. .
            </p>

            <p className="font-medium mb-4 text-lg">
              Join from anywhere & experience{" "}
              <span className="pb_text_red">Aspiration Online Campus</span>{" "}
              pedagogy.
            </p>
            <div className="w-full flex justify-center md:justify-start px-4">
              <div className="flex flex-col md:flex-row gap-3 md:gap-4">
                <button  onClick={handleNavigate} className="bg-red-600 hover:bg-red-700 rounded-full px-5 py-2 flex items-center gap-2 text-white font-medium text-sm md:text-base transition-all duration-300">
                  Explore Courses <BiChevronRight className="text-lg md:text-2xl" />
                </button>
                <a href="tel:+919998069806" className="border block sm:hidden xl:block border-white rounded-full px-5 py-2 flex items-center gap-2 text-red-600 font-medium text-sm md:text-base transition-all duration-300">
                  +91 9998069806 
                </a>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/5 mt-5 lg:mt-0">
            <img src="images/dsgfs.png" alt="" />
          </div>
        </div>
      </div>

      {/* next */}
      <div className="pb_bg_red relative">
        {/* Yellow Circle - Reduce overlap by adjusting position */}
        <div className="pb_bg_ylw w-36 h-36 rounded-full hidden  md:block absolute -left-[30px] -top-[35px] scale-110 z-[-11px]"></div>

        <div className="container max-w-7xl px-4 mx-auto py-10 flex flex-col lg:flex-row items-center justify-between relative z-[-10px]">
          <div className="text-center text-white mx-6 md:mx-10 md:px-5 relative z-[15px]">
            {" "}
            {/* Removed negative z-index */}
            <h2 className="font-bold text-2xl md:text-4xl lg:text-6xl text-white z-[-5px]">
            A Special Message to Parents
            </h2>
            
            {/* <h5 className="font-semibold">Dear Parents,</h5> */}
            <p className="mx-3 md:mx-4 sm:my-4 text-[12px] md:text-[16px]">
              Your child’s future is one of the most precious things in your
              life. As parents, you always want the best for them—whether it's
              education, career opportunities, or personal growth. Choosing the
              right coaching institute plays a crucial role in shaping their
              success, especially when preparing for highly competitive exams
              like JEE & NEET.
              <br />
              At{" "}
              <strong className="text-yellow-400">
                Aspiration JEE & NEET Academy
              </strong>
              , we understand that your child is unique, with their own
              strengths, learning pace, and aspirations. That’s why we are
              committed to providing not just coaching, but a complete
              mentorship journey—one that nurtures their academic excellence,
              confidence, and emotional well-being.
            </p>
            {/* Enroll Button */}
            <div className="flex justify-center w-full items-center px-2">
              <div className="flex flex-wrap gap-3 sm:gap-5 justify-center">
                {/* Enroll Now Button */}
                <Link to="/contact" className="relative z-[-10px] mx-auto my-2 sm:my-4 pb_bg_ylw rounded-full px-3 py-1 sm:px-4 sm:py-2 flex gap-1 sm:gap-2 text-black items-center font-medium text-xs sm:text-sm">
                  Enroll Now <BiChevronRight className="text-lg sm:text-2xl" />
                </Link>

                {/* Phone Number Button */}
                <a  href="tel:+919998029802" className="relative z-[-10px] mx-auto my-2 sm:my-4 border border-white rounded-full px-3 py-1 sm:px-4 sm:py-2 flex gap-1 sm:gap-2 text-white items-center font-semibold text-xs sm:text-sm">
                  +91 9998029802 <BiChevronRight className="text-lg sm:text-2xl" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom yellow strip adjustments */}
        <div className="pb_bg_ylw h-8 w-[97%] hidden md:block  z-[5] rounded-es-2xl absolute right-0 bottom-3"></div>
        <span className=" hidden absolute left-[3%] top-0 h-[95%] md:h-[90%] w-8 md:block pb_bg_ylw"></span>
      </div>
    </>
  );
};

export default Eacademy;
