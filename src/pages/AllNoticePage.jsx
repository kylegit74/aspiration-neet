import React, { useEffect, useState } from "react";
import { Search, Calendar, Tag } from "lucide-react";
import TopNavbar from "../layouts/TopNavbar";
import MainLayout from "../layouts/MainLayout";
import { Link, useNavigate } from "react-router-dom";
import NotFoundNotice from "../components/NotFound";
import FetchallNotice from "../Services/Notice/FetchAllNotice";
import Spinner from "../components/Spinner";
import { ToastContainer, toast } from "react-toastify";

const AllNoticePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [Notices, setNotices] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate=useNavigate()

  {
    /*const notices = [
    {
      id: "1",
      title: "Upcoming Admission Deadlines",
      date: "2024-03-15",
      category: "Admissions",
      description:
        "Admissions for the 2024-25 academic year are closing soon. Check the deadlines for various programs.",
    },
    {
      id: "2",
      title: "Board Exam Results Announcement",
      date: "2024-04-01",
      category: "Results",
      description:
        "The results for the board exams will be announced on April 5, 2024. Students can check their scores online.",
    },
    {
      id: "3",
      title: "New Scholarship Opportunities",
      date: "2024-03-20",
      category: "Scholarships",
      description:
        "Several new scholarship opportunities are now available. Apply before the deadline to be considered.",
    },
  ];*/
  }

  async function fetchnotices() {
    try {
      setIsLoading(true);
      const notices = await FetchallNotice();
      console.log("notices", notices.data);
      setNotices(notices.data);
      setIsLoading(false);
    } catch (error) {
      console.log("error", error);
   
    }
  }

  useEffect(() => {
    fetchnotices();
  }, []);

  const [filterItem, setFilterItem] = useState([]);

  useEffect(() => {
    setFilterItem(Notices);
  }, [Notices]);

  useEffect(() => {
    const filtered = Notices.filter((item) => {
      if (
        item?.name?.toLocaleLowerCase().includes(searchTerm) ||
        item?.short_content?.toLocaleLowerCase().includes(searchTerm)
      ) {
        return item;
      }
    });
    setFilterItem(filtered);
  }, [searchTerm]);

  let finalitems = searchTerm !== "" ? filterItem : Notices;
  function handleNavigate(slug)
  {
    navigate(`/notice/${slug}`)
  }

  return (
    <>
      <TopNavbar />
      <MainLayout>
        <div className="min-h-screen bg-yellow-50 py-6 px-4 sm:px-6 md:px-8 lg:px-10 mt-[100px]">
          <div className="max-w-5xl mx-auto">
            {/* Page Heading */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-800 text-center mb-4 sm:mb-6">
              All Notices
            </h1>
  
            {/* Search Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-6">
              <div className="relative w-full sm:w-3/4 md:w-2/3 lg:w-1/2 max-w-lg">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-yellow-600 h-6 w-6" />
                <input
                  type="text"
                  placeholder="Search notices..."
                  className="w-full pl-12 pr-4 py-3 lg:py-4 text-gray-800 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-600 transition-all duration-300"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
  
            {/* Notices List */}
            <div className="grid grid-cols-1 gap-4 sm:gap-6">
              {isLoading ? (
                <Spinner /> // Only show the spinner while loading notices
              ) : finalitems.length > 0 ? (
                finalitems.map((notice) => (
                  <div key={notice?.notice_tbl_unique_id} onClick={() => handleNavigate(notice?.notice_url_link)}>
                    <div className="bg-white rounded-lg cursor-pointer shadow-md p-4 sm:p-6 border-l-4 border-red-600 transition hover:shadow-lg">
                      <h3 className="text-sm sm:text-lg md:text-xl font-semibold text-red-700 mb-2">
                        {notice.name}
                      </h3>
                      <p
                        className="text-yellow-800 text-xs sm:text-sm md:text-base mb-3"
                        dangerouslySetInnerHTML={{ __html: notice.short_content }}
                      ></p>
                      <div className="flex flex-wrap justify-between items-center text-xs sm:text-sm text-yellow-700 gap-2">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />{" "}
                          {new Date(notice?.updated_at).toLocaleDateString()}
                        </span>
                        <span className="flex items-center gap-1">
                          <Tag className="h-4 w-4" /> {notice?.category}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <NotFoundNotice />
              )}
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
}
export default AllNoticePage;