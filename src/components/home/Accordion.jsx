import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import DOMPurify from "dompurify";

const CourseAccordion = ({ course }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-lg">
      {/* Accordion Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-4 pb_bg_red text-white text-lg font-bold rounded-t-lg"
      >
        Course Details
        <BiChevronDown
          className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {/* Accordion Content */}
      {isOpen && (
        <div
          className="pb_bg_red text-white p-4 transition-all duration-500 ease-in-out"
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(course) }}
        />
      )}
    </div>
  );
};

export default CourseAccordion;
