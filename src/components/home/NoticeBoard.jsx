import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Autoplay } from "swiper/modules";
import {
  BiArrowBack,
  BiChevronRight,
  BiChevronsRight,
  BiLeftArrow,
} from "react-icons/bi";
import FetchallNotice from "../../Services/Notice/FetchAllNotice";
import Spinner from "../Spinner";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const NoticeBoard = () => {
  const navigate = useNavigate();
  const [Notices, setNotices] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchnotices() {
    try {
      setIsLoading(true);
      const notices = await FetchallNotice();
      console.log("noticehere", notices);
      setNotices(notices.data);
      setIsLoading(false);
    } catch (error) {
      console.log("error", error);
     
     
    }
  }

  useEffect(() => {
    fetchnotices();
  }, []);

  {
    /*const notices = [
    {
      title: "JEE NEET Exam Date Announced",
      content:
        "The National Testing Agency (NTA) has announced the examination dates for JEE Main and NEET 2024. Important instructions and preparation guidelines are now available.",
      link: "#",
    },
    {
      title: "Scholarship Applications Open",
      content:
        "Applications are now open for merit-based scholarships for the academic year 2024-25. Last date to apply is March 31st, 2024.",
      link: "#",
    },
    {
      title: "Campus Placement Drive",
      content:
        "Major tech companies will be visiting our campus for recruitment. Register before March 15th to participate in the placement drive.",
      link: "#",
    },
  ];*/
  }
  function GoToSpecificNoticePage(slug) {
    navigate(`/notice/${slug}`);
  }
  function Gotonoticepage() {
    navigate("/notices");
  }

  return (
    <div className="flex items-center justify-center bg-gray-100 py-5 md:py-10 lg:py-20 relative overflow-hidden">
         
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="notice-board-card pb_bg_red text-white shadow-lg p-3 md:p-6 rounded-3xl w-full max-w-screen-xl relative overflow-hidden">
          <div className="flex justify-between items-center">
            <h2 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl relative">
              Notice Board
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-yellow-500 rounded-full"></span>
            </h2>
            <button
              className="bg-white text-red-600 hover:bg-gray-100 transition-all duration-300 px-3 py-2 sm:px-4 sm:py-2 rounded-lg flex items-center gap-2 text-xs sm:text-sm md:text-base font-semibold"
              onClick={() => Gotonoticepage()}
            >
              View All <BiChevronsRight className="text-lg sm:text-xl" />
            </button>
          </div>
          <span className="absolute top-20 w-full h-[2px] bg-white/50 left-0"></span>
          <div className="pb_bg_ylw w-24 h-24 rounded-full absolute hidden md:block -left-20 top-24 animate-pulse"></div>
          <div className="pb_bg_ylw w-32 h-32 rounded-full absolute hidden md:block -right-20 bottom-12 animate-pulse"></div>

          <Swiper
            className="my-10 z-[-10px] relative"
            modules={[Navigation, Autoplay]}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
          >
            {Notices.length > 0 ? (
              Notices.slice(0, 4).map((notice, index) => (
                <SwiperSlide key={index}>
                  <div className="px-4 space-y-4">
                    <h3 className=" text-sm md:text-xl ml-6 md:ml-4 lg:text-xl md:text-2xl t font-bold ml-4 flex items-center gap-2">
                      {notice.name}
                    </h3>
                    <div
                      className="text-white/90 mx-4 ml-6 md:ml-4 leading-relaxed text-[12px] md:text-base"
                    
                      dangerouslySetInnerHTML={{__html:notice?.short_content}}
                    ></div>

                    <a
                      href={notice.link}
                      className="bg-white pb_text_red cursor-pointer rounded-full px-5 py-2 font-medium mt-3 flex w-fit items-center text-xs sm:text-sm md:text-base lg:text-lg ml-4 hover:bg-gray-100 transition-colors duration-300 group"
                      onClick={(e) => GoToSpecificNoticePage(notice?.notice_url_link)}
                    >
                      View Notice
                      <BiChevronRight className="text-2xl mt-[2px] group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                  </div>
                </SwiperSlide>
              ))
            ) : (
              <div className="font-bold text-center"> No Notice Uploaded </div>
            )}
          </Swiper>

          {/* Custom Navigation Arrows */}
          <div className="swiper-button-prev pb_text_red bg-white rounded-full hover:bg-gray-100 cursor-pointer nav_none z-[1] p-2 transition-colors duration-300">
            <BiArrowBack className="pb_text_red" />
          </div>
          <div className="swiper-button-next bg-white rounded-full hover:bg-gray-100 cursor-pointer nav_none p-2 transition-colors duration-300 z-[1]">
            <BiArrowBack className="pb_text_red rotate-180" />
          </div>
        </div>
      )}
    </div>
  );
};

export default NoticeBoard;
