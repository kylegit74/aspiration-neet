import React, { useContext } from "react";
import HeroSection from "./HeroSection";
import NoticeBoard from "./NoticeBoard";
import WhyChoosUs from "./WhyChoosUs";
import AreaInterest from "./AreaInterest";
import Eacademy from "./Eacademy";
import AboveFooter from "./AboveFooter";
import SkipVideoSection from "./SkipVideoSection";
import { videoContext } from "../ContextApi/HomePageVideoContext"; // ✅ Import correct context

const MainBody = () => {
  const { isvideoskip } = useContext(videoContext); // ✅ Now it will work properly

  return (
    <>
      {isvideoskip ? (
        <>
          <HeroSection />
          <NoticeBoard />
          <WhyChoosUs />
          <AreaInterest />
          <Eacademy />
          <AboveFooter />
        </>
      ) : (
        <SkipVideoSection />
      )}
    </>
  );
};

export default MainBody;
