import React, { useState, useEffect, useContext, useRef } from "react";
import { X } from "lucide-react";
import { videoContext } from "../ContextApi/HomePageVideoContext";
import video from "../../Imagesall/ASJNA.mp4";

function SkipVideoSection() {
  const videoRef = useRef(null);

  const { setisvideoskip } = useContext(videoContext);
  const [videoEnded, setVideoEnded] = useState(false);
  console.log("video", video);

  useEffect(() => {
    const video = videoRef.current;
    const handleEnded = () => {
      setisvideoskip(true)
    };
    if (video) {
      video.addEventListener("ended", handleEnded);
    }
    return () => {
      if (video) {
        video.removeEventListener("ended", handleEnded);
      }
    };
  }, []);

  useEffect(() => {
    if (videoEnded) {
      setisvideoskip(true);
    }
  }, [videoEnded, setisvideoskip]);

  const handleSkip = () => {
    setisvideoskip(true);
console.log('dlsks')
    setVideoEnded(false);
  };

  return (
    <div className="min-h-screen w-[90vw] bg-white">
    <div className="fixed w-[100%] inset-0 bg-[#FFC402] w-full z-50 flex flex-col items-center justify-center">
        
        <video
          className="w-[100%] max-w-4xl"
          autoPlay
          muted
          
          ref={videoRef} //Adding controls for testing.
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <button
          onClick={handleSkip}
          className="absolute mt-[550px] text-white bg-[#f26522] hover:bg-[#e55511] px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
        >
          Skip Video <X size={20} />
        </button>
      </div>
    </div>
  );
}

export default SkipVideoSection;
