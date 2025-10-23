import { useState } from "react";
import { BiCaretRight, BiChevronDown } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { videoContext } from "../ContextApi/HomePageVideoContext";

const MenuAccordion = () => {
  const { setisclickoncoursecategory, setCategory } = useContext(videoContext);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const menuItems = ["Home", "Courses", "About", "Contact","whychooseus"];

  function HandleNavigate(text) {
    console.log("as", text);
    if (text === "Home") {
      navigate("/");
    } else {
      const textlower = text.toLowerCase();
      setisclickoncoursecategory("");
      setCategory([]);
      navigate(`/${textlower}`);
    }
  }

  return (
    <div className="text-white text-start md:text-center">
      {/* Menu Header */}
      <h4 className="text-lg font-medium mb-4 text-center md:text-start">Popular Menus</h4>

      {/* Accordion Toggle for Small Devices */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="sm:hidden flex items-center justify-center mx-auto text-white font-semibold mb-4"
      >
        Menu
        <BiChevronDown
          className={`ml-2 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Menu List */}
      <ul
        className={`space-y-2 transition-all duration-500 text-center ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        } sm:max-h-none sm:opacity-100 overflow-hidden`}
      >
        {menuItems.map((text) => (
          <li
            key={text}
            className="flex justify-center  md:justify-start items-center hover:text-yellow-400 transition-colors cursor-pointer"
            onClick={() => HandleNavigate(text)}
          >
            <BiCaretRight className="mr-2" />
            {text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuAccordion;
