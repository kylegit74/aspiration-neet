import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Bell, Download } from "lucide-react";
import TopNavbar from "../layouts/TopNavbar";
import MainLayout from "../layouts/MainLayout";
import FetchallNotice from "../Services/Notice/FetchAllNotice";
import Spinner from "../components/Spinner";
import FetchNoticeById from "../Services/Notice/FetchNoticeById";
import { ToastContainer, toast } from "react-toastify";
//Done  1.0

const SpecificNoticePage = () => {
const [Notice, setNotices] = useState([]);
const [isLoading, setIsLoading] = useState(false);
const { slug } = useParams();

async function FetchNotice() {
  try {
    setIsLoading(true);
    const response = await FetchallNotice();
    console.log("noticesds", response?.data);
    setNotices(response.data);
    setIsLoading(false) // Ensure it's always an array
  } catch (error) {
    console.error("Error fetching notices:", error);
   
  } 
}
const filteredbyslug=Notice.filter((notice)=>notice?.notice_url_link===slug);
console.log('filtereds',filteredbyslug)

useEffect(() => {
  FetchNotice();
}, []);  // Fetch only once




return (
  <>
    <TopNavbar />
    <MainLayout>
      <div className="flex justify-center items-center mt-[100px] py-8 md:mt-[90px] md:min-h-screen bg-gray-100 px-4">
        <div className="bg-white rounded-lg shadow-lg p-5 sm:p-8 max-w-3xl w-full">
          {isLoading ? (
            <div className="flex justify-center py-10">
              <Spinner />
            </div>
          ) : (
            <div className="flex flex-col sm:flex-row sm:items-start sm:space-x-4">
              {/* Icon - Adjusted for Small Screens */}
              <div className="flex-shrink-0 mb-3 sm:mb-0 hidden sm:block">
                <Bell className="h-7 w-7 sm:h-8 sm:w-8 text-red-500" />
              </div>

              {/* Notice Content */}
              <div className="flex-1">
                <h3 className="text-lg sm:text-2xl font-bold text-yellow-600">
                  {filteredbyslug[0]?.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">
                  {new Date(filteredbyslug[0]?.updated_at).toLocaleDateString()}
                </p>
                <p
                  className="text-gray-700 mt-3 text-sm sm:text-base leading-snug"
                  dangerouslySetInnerHTML={{ __html: filteredbyslug[0]?.short_content }}
                ></p>
                <p
                  className="text-gray-800 mt-4 leading-relaxed text-sm sm:text-base"
                  dangerouslySetInnerHTML={{ __html: filteredbyslug[0]?.full_content }}
                ></p>
              </div>
            </div>
          )}

          {/* Back Button */}
          <div className="mt-6 flex justify-center sm:justify-end">
            <Link
              to="/notices"
              className="w-full sm:w-auto px-4 sm:px-5 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition text-center text-sm sm:text-base"
            >
              Back to Notices
            </Link>
          </div>
        </div>
      </div>
    </MainLayout>
  </>
);
}
export default SpecificNoticePage