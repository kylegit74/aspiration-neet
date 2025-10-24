import { useContext, useState, useEffect } from "react";
import courseimg from "../../Imagesall/banner.png";
import { IndianRupee } from "lucide-react";
import { videoContext } from "../ContextApi/HomePageVideoContext";
import NotFoundNotice from "../NotFound";
import { useNavigate } from "react-router-dom";
import FetchAllCourses from "../../Services/Course/FetchAllCourse";
import Spinner from "../Spinner";
import { ToastContainer, toast } from "react-toastify";

function CourseCard() {
  const {
    coursesearchquery,
    price,
    category,
    setCategory,
    isclickoncoursecategory,
    setisclickoncoursecategory,
  } = useContext(videoContext);

  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filteredCourses, setFilteredCourses] = useState([]);

  const navigate = useNavigate();

  // ✅ Load isclickoncoursecategory from localStorage on mount
  useEffect(() => {
    const storedCategory = localStorage.getItem("isclickoncoursecategory");
    if (storedCategory) {
      setisclickoncoursecategory(storedCategory);
    }
  }, []);

  // ✅ Fetch courses on mount
  useEffect(() => {
    async function fetchCourses() {
      try {
        setIsLoading(true);
        const fetchedCourses = await FetchAllCourses();
        setCourses(fetchedCourses.data.slice(0, 3));
        console.log("courses", fetchedCourses);
        setIsLoading(false);
      } catch (error) {}
    }
    fetchCourses();
    console.log("course", courses);
  }, []);

  // ✅ Filtering function (Runs when dependencies change)
  useEffect(() => {
    let filtered = [...courses];

    // Apply search filter
    if (coursesearchquery) {
      const searchLower = coursesearchquery.toLowerCase();
      filtered = filtered.filter(
        (course) =>
          course.name?.toLowerCase().includes(searchLower) ||
          course.short_content?.toLowerCase().includes(searchLower)
      );
    }

    // Apply category filter
    if (category?.length > 0) {
      filtered = filtered.filter(
        (course) =>
          category.includes(course.category) ||
          category.includes(course.mode) ||
          category.includes(course.class_name) ||
          category?.includes(course?.duration) ||
          category?.includes(course.target_exam)
      );
    }

    // Apply isclickoncoursecategory filter
    if (isclickoncoursecategory) {
      filtered = filtered.filter(
        (course) =>
          course.category?.toLowerCase().replace(/[-\s]/g, "") ===
          isclickoncoursecategory?.toLowerCase().replace(/[-\s]/g, "")
      );
    }

    setFilteredCourses(filtered);
  }, [courses, coursesearchquery, category, isclickoncoursecategory]);

  /// getting all categories while refresh
  useEffect(() => {
    setisclickoncoursecategory("");
    console.log("courses", courses);
    setCategory([]);
  }, []);

  function Gotodetailspage(slug) {
    navigate(`/courses/${slug}`);
  }

  function handlebuy(slug) {
    navigate(`/course/apply/${slug}`);
  }

  return (
    <>
      {isLoading ? (
        <>
          <Spinner />
        </>
      ) : (
        <>
          {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 ">
              {filteredCourses.map((course) => (
                <div
                  key={course.id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl cursor-pointer transition-shadow duration-300 overflow-hidden group"
                >
                  <div className="relative h-48 bg-amber-100">
                    <img
                      src={`https://admin.aspirationjeeneet.in/${course.image_uploaded}`}
                      alt={course.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-red-600/30 to-transparent"></div>
                    {course.isFeatured && (
                      <div className="absolute top-3 right-3 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center">
                        {course?.deuration && (
                          <span className="text-yellow-600 bg-yellow-100 px-3 py-1 rounded-full text-sm font-medium mr-2">
                            {course?.duration}
                          </span>
                        )}
                        <span className="text-red-600 text-sm">
                          <IndianRupee className="inline mr-1" size={16} />
                          {course.price ? course.price : "50000"}
                        </span>
                      </div>
                      <span
                        className={`text-sm ${
                          course.enrollmentStatus === "Open"
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                      >
                        {course?.enrollmentStatus}
                      </span>
                    </div>
                    <h3 className=" text-sm md:text-xl font-bold text-gray-800 mb-2">
                      {course?.name}
                    </h3>
                    <div className="flex items-center mb-3">
                      <span className="text-yellow-600 mr-2">★ ★ ★ ★ ★</span>
                    </div>
                    <p
                      className="text-gray-600 mb-4 line-clamp-3"
                      dangerouslySetInnerHTML={{ __html: course.short_content }}
                    ></p>

                    <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-4">
                      <button
                        className="w-full sm:w-auto px-3 py-2 sm:px-4 sm:py-2 border-2 border-red-600 
                        text-red-600 rounded-lg hover:bg-red-600 hover:text-white 
                        transition-colors duration-300 text-center"
                        onClick={() => Gotodetailspage(course?.course_url_link)}
                      >
                        View Details
                      </button>

                      <button
                        className="w-full sm:w-auto px-3 py-2 sm:px-4 sm:py-2 bg-yellow-600 text-white 
                        rounded-lg hover:bg-yellow-700 transition-colors duration-300 
                        flex items-center justify-center"
                        onClick={() => handlebuy(course?.course_url_link)}
                      >
                        Buy Now
                      </button>
                    </div>

                    <button
                      className="w-full mt-2 px-3 py-2 sm:px-4 sm:py-2 bg-red-600 text-white 
                      rounded-md hover:bg-red-700 transition-colors duration-300"
                    >
                      <a href="tel:+91 9998069806">Enquiry Now</a>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <NotFoundNotice />
          )}
        </>
      )}
    </>
  );
}

export default CourseCard;
