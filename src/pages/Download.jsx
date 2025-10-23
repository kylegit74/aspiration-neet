import React, { useEffect, useState } from "react";
import {
  Search,
  Calendar,
  Tag,
  Download,
  ChevronRight,
  Filter,
} from "lucide-react";
import NotFoundNotice from "../components/NotFound";
import TopNavbar from "../layouts/TopNavbar";

import { Link, useNavigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import FetchAllDownloadData from "../Services/Download/FetchDownloadData";
import Spinner from "../components/Spinner";
import { ToastContainer, toast } from "react-toastify";

const NoticeView = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showFilters, setShowFilters] = useState(false);
  const [isloading, setIsLoading] = useState(false);
  const [Downloads, SetDownloads] = useState([]);
  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);

  //fetching data

  async function FetchDownloadData() {
    try {
      setIsLoading(true);
      const res = await FetchAllDownloadData();
      console.log("res", res);
      SetDownloads(res.data);
      setIsLoading(false);
    } catch (error) {
      
     
    }
  }

  useEffect(() => {
    FetchDownloadData();
  }, []);

  // filtering category unique category
  const getcategory = Downloads.map((category) => category.category);
  console.log("getcategory", getcategory);
  const Getuniquecategory = [];
  getcategory.map((cetegory) => {
    if (!Getuniquecategory.includes(cetegory)) {
      Getuniquecategory.push(cetegory);
    }
  });
  console.log("getallunique", Getuniquecategory);
  //fitler logic below
  const filteredNotices = Downloads?.filter((notice) => {
    const matchesSearch =
      notice?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      notice?.description?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory?.toLowerCase() === "all" ||
      notice?.category?.toLowerCase() === selectedCategory?.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  const resetFilters = () => {
    setSearchTerm("");
    setSelectedCategory("all");
  };

  return isloading ? (
    <>
      <Spinner /> {" "}
    </>
  ) : (
    <>
      <TopNavbar />
      <MainLayout>
        <div className="min-h-screen bg-yellow-50 mt-[120px] md:py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-red-800 mb-2">Download</h1>
              <p className="text-yellow-700">
                Stay updated with the latest announcements
              </p>
            </div>

            <div className="bg-white rounded-xl min-w-[60%]  shadow-lg p-4 border border-red-200 mb-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full sm:max-w-[50%] relative flex-1">
                  {/* Search Icon */}
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-yellow-600 h-6 w-6" />

                  {/* Search Input */}
                  <input
                    type="text"
                    placeholder="Search notices..."
                    className="w-full pl-12 pr-4 py-3 border border-yellow-400 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>

                {/* <button
                className="sm:hidden flex items-center justify-center gap-2 px-4 py-2 border border-yellow-300 rounded-lg text-red-700 hover:bg-yellow-100"
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter className="h-5 w-5" />
                Filters
              </button> */}
                {/** Categories  */}

                <div className="flex gap-2 overflow-x-auto pb-2">
                  {Getuniquecategory.map((category) => (
                    <button
                      key={category}
                      className={`px-2 py-1 rounded-lg whitespace-nowrap transition-colors ${
                        selectedCategory.toLowerCase() ===
                        category.toLowerCase()
                          ? "bg-red-600 text-white"
                          : "bg-yellow-200 text-red-700 hover:bg-yellow-300"
                      }`}
                      onClick={() =>
                        setSelectedCategory(category.toLowerCase())
                      }
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {filteredNotices.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                {filteredNotices.map((notice) => (
                  <div
                    key={notice?.id}
                    className="bg-white rounded-xl shadow-lg p-6 border border-yellow-400 hover:shadow-xl transition-shadow"
                  >
                    <h3 className="text-lg font-semibold text-red-700 mb-2">
                      {notice?.name}
                    </h3>
                    <p
                      className="text-yellow-800 text-sm mb-3"
                      dangerouslySetInnerHTML={{ __html: notice?.full_content }}
                    ></p>

                    {/* Date & Category */}
                    <div className="flex justify-between items-center text-sm text-yellow-700 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />{" "}
                        {new Date(notice?.updated_at).toLocaleDateString()}
                      </span>
                      {/* <span className="flex items-center gap-1">
                        <Tag className="h-4 w-4" /> {notice.category}
                      </span> */}
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-4">
                      {/* {notice.pdfUrl && ( */}
                      <a
                        href={`https://admin.aspirationjeeneet.in/${notice?.pdf_uploaded}`}
                        className="w-full sm:w-auto text-center text-red-600 hover:underline text-sm sm:text-base"
                      >
                        Download PDF
                      </a>
                      {/* )} */}
                      <Link
                        to="/contact"
                        className="w-full sm:w-auto px-3 py-2 sm:px-4 sm:py-2 text-sm sm:text-base 
               bg-red-600 text-white rounded-lg hover:bg-red-700 
               transition-all duration-300 text-center"
                      >
                        Enquiry Now
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <NotFoundNotice resetFilters={resetFilters} />
            )}
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default NoticeView;
