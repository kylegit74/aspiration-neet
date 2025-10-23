import { useState } from "react";
import { Clock, CheckCircle, Link } from "lucide-react";

import { IndianRupee } from "lucide-react";
import courseimg from "../Imagesall/banner.png";
import Footer from "../layouts/Footer";
import TopNavbar from "../layouts/TopNavbar";
import Header from "../layouts/Header";
import MainLayout from "../layouts/MainLayout";
import { useNavigate, useParams } from "react-router-dom";
import FetchAllCourses from "../Services/Course/FetchAllCourse";
import { useEffect } from "react";
import GetCourseById from "../Services/Course/GetCourseById";
import DOMPurify from "dompurify";
import Spinner from "../components/Spinner";
import { ToastContainer, toast } from "react-toastify";

function CourseDetailsPage() {
  const [activeTab, setActiveTab] = useState("description");

  const Navigate = useNavigate();
  const { slug } = useParams();

  {
    /*const course = {
    id: 1,
    title: "General Studies Foundation Course",
    category: "Classroom",
    price: 60000,
    description:
      "Comprehensive coverage of GS papers for UPSC prelims and mains with current affairs updates.",
    detailedDescription: `
          This course provides in-depth preparation for the UPSC Civil Services Examination with:
          - 360+ hours of live classes
          - 50+ practice tests
          - Current affairs updates (weekly)
          - Personal mentorship
          - Answer writing practice sessions
        `,
    imageUrl: courseimg,
    duration: "12 Months",
    instructor: {
      name: "Dr. Ravi Verma",
      bio: "UPSC expert with 15+ years experience, 200+ successful candidates",
      rating: 4.8,
      studentsTaught: 1500,
      image: courseimg,
    },
    syllabus: [
      {
        module: 1,
        title: "Indian History",
        topics: ["Ancient India", "Medieval India", "Modern India"],
        duration: "6 Weeks",
      },
      {
        module: 2,
        title: "Indian Polity",
        topics: ["Constitution", "Political System", "Governance"],
        duration: "4 Weeks",
      },
    ],
    features: [
      "Live Interactive Classes",
      "Weekly Doubt Sessions",
      "Personalized Feedback",
      "Study Material Provided",
      "Mock Interview Preparation",
    ],
    reviews: [
      {
        user: "Amit Sharma",
        rating: 5,
        comment: "Best course for UPSC preparation. Excellent faculty support!",
      },
    ],
  };
  */
  }
  const [course, setCourse] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  //Fething course

  useEffect(() => {
    async function FetchCourse() {
      try {
        setIsLoading(true);
        const fetchedCourse = await FetchAllCourses();
        console.log("coursesfsdfsdsdf", fetchedCourse);
        setCourse(fetchedCourse.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching courses:", error);
      
        
      }
    }
    FetchCourse();
  }, []);
  const filtered=course.filter((course)=>course.course_url_link==slug)
  console.log('filterbyslug',filtered)


  console.log("course", course);

  function handleEnroll(slug) {
    Navigate(`/course/apply/${slug}`);
  }

  return isLoading? <><Spinner/> </>:(
    <MainLayout>
      <div className="min-h-screen bg-gray-50 mt-[110px]">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-red-50 to-yellow-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-2/3">
                <span className="bg-red-100 text-red-600 px-4 py-1 rounded-full text-sm font-semibold">
                  {filtered[0]?.category ? course.category : "classroom"}
                </span>
                <h1 className="text-2xl md:text-4xl font-bold mt-6 mb-4 text-gray-900">
                  {filtered[0]?.name}
                </h1>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center text-red-600">
                    <IndianRupee className="w-6 h-6" />
                    <span className="text-2xl  md:text-3xl font-bold">
                      {filtered[0]?.price?.toLocaleString()
                        ? filtered[0]?.price?.toLocaleString()
                        : "No Price Given"}
                    </span>
                  </div>
                  <span className="text-gray-600">•</span>
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-5 h-5 mr-2" />
                    <span className="text-lg">
                      {filtered[0]?.duration
                        ? filtered[0]?.duration
                        : "No Duration Given"}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-3 md:gap-4 w-full">
                  <button
                    className="w-full md:w-auto bg-red-600 text-white px-6 md:px-8 py-2 md:py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                    onClick={()=>handleEnroll(filtered[0]?.course_url_link)}
                  >
                    Enroll Now
                  </button>
                  <button className="w-full md:w-auto border-2 border-red-600 text-red-600 px-6 md:px-8 py-2 md:py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors">
                    <a
                      href="tel:+91 9998069806"
                      className="px-2 py-1 text-red rounded-[10px] mt-[50px]"
                    >
                      Enquiry Now
                    </a>
                  </button>
                </div>
              </div>
              <div className="lg:w-1/3 mt-8 lg:mt-0">
                <img
                  src={`https://admin.aspirationjeeneet.in/${filtered[0]?.image_uploaded}`}
                  alt={filtered[0]?.name}
                  className="rounded-xl shadow-lg w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
            {/* Left Column */}
            <div className="xl:col-span-3">
              {/* Tabs */}
              <div className="flex border-b-2 border-gray-200 mb-8">
                {["description"]?.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-3 font-semibold ${
                      activeTab === tab
                        ? "border-b-2 border-red-600 text-red-600"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>

              {activeTab === "description" && (
                <div className="space-y-6">
                  <div
                    key={module?.module}
                    className="border rounded-lg bg-white"
                  >
                    <div className="flex justify-between items-center p-4 bg-gray-50 rounded-t-lg"></div>
                    <div className="p-4">
                      <p
                        dangerouslySetInnerHTML={{
                          __html: filtered[0]?.short_content,
                        }}>
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Right Column - Features */}
            <div className="lg:col-span-1">
              <div className="bg-white p-6 rounded-lg shadow-sm sticky top-8">
                <h3 className="text-lg font-semibold mb-4">Course Features</h3>
                {/* <ul className="space-y-3">
                  {course?.features?.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center text-gray-600"
                    >
                      <CheckCircle className="w-5 h-5 text-red-600 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul> */}
                <p dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(filtered[0]?.course_feature) }} className="py-2"></p>
                <div className="mt-6">
                  <button
                    className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                    onClick={()=>handleEnroll(filtered[0]?.course_url_link)}
                  >
                    Enroll Now @ ₹{filtered[0]?.price?.toLocaleString()}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
export default CourseDetailsPage;
