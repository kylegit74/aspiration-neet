import React, { useEffect, useState } from "react";
import { BiArrowBack, BiChevronRight } from "react-icons/bi";
import FetchAllCourses from "../../Services/Course/FetchAllCourse";
import Spinner from "../Spinner";
import CourseAccordion from "./Accordion";
import { useContext } from "react";
import { videoContext } from "../ContextApi/HomePageVideoContext";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const AreaInterest = () => {
    const { setisclickoncoursecategory, setCategory} = useContext(videoContext);
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate=useNavigate()

  useEffect(() => {
    async function fetchCourses() {
      try {
        setIsLoading(true);
        const fetchedCourses = await FetchAllCourses();
        console.log("courses", fetchedCourses);
        setCourses(fetchedCourses.data.slice(0, 3));
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching courses:", error);
        
       
      }
    }
    fetchCourses();
  }, []);
 function handleExploreCourse()
 {
  setisclickoncoursecategory("")
  setCategory([])
  navigate('/courses')

 }
  return (
    <div className="relative overflow-hidden bg-yellow-100 py-10">
      <div className="container max-w-7xl px-4 mx-auto">
        <h4 className="text-center text-[30px] font-bold ">
          Pick Course as per your Area of Interest
        </h4>
        <h2 className="text-center mt-3 mb-10 text-3xl sm:text-4xl font-bold">
          Top Ranked <span className="text-red-600">Courses</span>
        </h2>

        {isLoading ? (<>
            
          <Spinner />
          </>
        ) : (
          <div className="container mx-auto px-4 space-y-8 sm:space-y-12">
            {courses.length > 0 ? (
              courses.map((course, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-0 items-stretch ${
                    index % 2 === 0 ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  <div className="h-full">
                    <img
                      className="rounded-none w-full object-cover h-full"
                      src={`https://admin.aspirationjeeneet.in/${course.image_uploaded}`}
                      alt={course.name}
                    />
                  </div>

                  <div className="pb_bg_red text-white h-full flex flex-col justify-between p-4 sm:p-6">
                    <div>
                      <h5 className="text-xl sm:text-2xl font-bold">
                        {course.name}
                      </h5>
                      <p
                        className="mt-2 text-white text-sm sm:text-base"
                        dangerouslySetInnerHTML={{
                          __html: course.short_content,
                        }}
                      ></p>

                      <ul className="list-disc list-inside text-white text-sm mt-3">
                        <CourseAccordion course={course?.course_feature} />
                      </ul>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 mt-4">
                      <Link
                        to={`/course/apply/${course.course_tbl_unique_id}`}
                        className="bg-white text-red-500 rounded-full px-3 py-2 sm:px-4 sm:py-2 flex-grow sm:flex-grow-0 flex items-center justify-center font-medium text-sm sm:text-base w-full sm:w-auto"
                      >
                        Enroll Now <BiChevronRight className="text-xl" />
                      </Link>
                      <button
                      
                        className="px-3 py-2 sm:px-4 sm:py-2 flex-grow sm:flex-grow-0 flex items-center justify-center font-medium border border-white text-white rounded-full text-sm sm:text-base w-full sm:w-auto"
                       onClick={()=>handleExploreCourse()}>
                        Explore Course{" "}
                        <BiArrowBack className="rotate-180 text-xl" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-black font-bold text-center">
                No Courses Uploaded{" "}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AreaInterest;
