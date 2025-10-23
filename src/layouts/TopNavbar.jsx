import { motion, useAnimation } from "framer-motion";
import { useState, useEffect } from "react";
import { Eye, FileText } from "lucide-react";
import FetchTopnavbar from "../Services/TopNavbar/FetchTopNavbar";

function TopNavbar() {
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);
  const [Data, setData] = useState([]);

  async function FetchData() {
    try {
      const res = await FetchTopnavbar();
      console.log("Fetched Data:", res.data);
      setData(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    FetchData();
  }, []);

  useEffect(() => {
    if (!isHovered) {
      controls.start({
        x: ["0%", "-100%"],
        transition: {
          duration: 20,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        },
      });
    } else {
      controls.stop(); // Stop animation on hover
    }
  }, [isHovered, controls]);

  return (
    <div
      className="w-full bg-red-600 h-[50px] fixed top-0 z-50 shadow-md overflow-hidden flex items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full h-full flex items-center overflow-hidden">
        <motion.div
          className="absolute flex items-center z-40 gap-20 text-white font-semibold text-lg whitespace-nowrap"
          animate={controls}
        >
          {Data.length > 0
            ? Data.map((item, index) => (
                <a
                  key={index}
                  href={item.pdf_uploaded ? `https://admin.aspirationjeeneet.in/${item.pdf_uploaded }`: "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative cursor-pointer z-10 flex justify-center items-center gap-2 pb-1 hover:text-yellow-300 transition-colors"
                >
                  <Eye className="w-5 h-5" /> {item.pdf_content || "No Content"}
                  
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-300 opacity-0 transition-opacity hover:opacity-100" />
                </a>
              ))
            :""}
        </motion.div>
      </div>
    </div>
  );
}

export default TopNavbar;
