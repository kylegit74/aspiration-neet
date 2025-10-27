import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import FetchAllBanner from "../../Services/Banner/FetchAllBanner";
import Spinner from "../Spinner";
import bannerimage from '../../Imagesall/bannerimage.png'

const HeroSection = () => {
  const [banners, setBanners] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchBanners() {
    try {
      setIsLoading(true);
      const response = await FetchAllBanner();
      setBanners(response.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchBanners();

  }, []);
  useEffect(() => {
    console.log("banners", banners)
  }, [banners])

  return (
    <>

      {isLoading ? (
        <Spinner />
      ) : (
        <div className="hero-section mt-[100px] w-full overflow-hidden">
          {banners.length > 0 ? (
            <Swiper
              modules={[ Pagination, Autoplay]}
              spaceBetween={10}
              slidesPerView={1}
              loop={true}
              
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              className="w-full max-w-[1600px] mx-auto"
            >
              {banners.map((banner, index) => (
                <SwiperSlide key={index}>
                  <Link to={banner?.link}>
                    <img
                      className="w-full h-[30vh] sm:h-[50vh] md:h-[60vh] lg:h-[90vh] object-cover"
                      src={ `https://admin.aspirationjeeneet.in/${banner.image_uploaded}` }
                      alt={banner?.alt_tag || 'banner'}
                    />
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <img
              className="w-full h-[30vh] sm:h-[50vh] md:h-[60vh] lg:h-[90vh] object-cover"
              src={bannerimage}
              alt="default"
            />
          )}
        </div>

      )}
    </>
  );
};

export default HeroSection;
