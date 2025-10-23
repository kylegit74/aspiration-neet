import React, { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import { Search, Filter } from "lucide-react";

const SearchPage = () => {
  const [Query, setQuery]=useState()
  return (
    <MainLayout>
      <div className="min-h-screen bg-gradient-to-br mt-[110px] from-yellow-50 to-red-50">
        {/* Main Content */}
        <div className="relative max-w-7xl mx-auto px-4 py-8">
          <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-2xl p-8 border-2 border-yellow-500">
            {/* Search Form */}
            <form className="flex flex-col md:flex-row gap-4 mb-6">
              <input
                type="text"
                className="flex-1 p-4 border-2 border-yellow-300 rounded-lg focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-200 transition-all"
                placeholder="🔍 Search for study materials, current affairs, or resources..."
              />
              <button
                type="submit"
                
                className="bg-gradient-to-r from-red-500 to-red-700 text-white px-8 py-4 rounded-lg shadow-lg hover:scale-105 transition-all duration-300 font-medium flex items-center justify-center gap-2"
              >
                <Search className="h-5 w-5" />
                Search
              </button>
            </form>

            {/* Filters */}
            <div className="flex flex-wrap gap-4 mb-6">
              <select className="p-2 border-2 border-yellow-200 rounded-lg bg-yellow-50">
                <option>All Categories</option>
                <option>Current Affairs</option>
                <option>History</option>
                <option>Polity</option>
              </select>
              <select className="p-2 border-2 border-yellow-200 rounded-lg bg-yellow-50">
                <option>All Years</option>
                <option>2023</option>
                <option>2022</option>
                <option>2021</option>
              </select>
              <div className="p-2 border-2 border-yellow-200 rounded-lg bg-yellow-50 text-red-700">
                <i className="fas fa-tag mr-2"></i>Tags: UPSC, IAS, Prelims
              </div>
            </div>

            {/* Results Count */}
            <div className="text-red-700 mb-4 font-medium">
              Showing 1-10 of 45 results{" "}
              <span className="ml-2 animate-pulse">🔥</span>
            </div>

            {/* Search Results */}
            <div className="space-y-4">
              {/* Result Item */}
              <div className="p-6 border-2 border-yellow-100 rounded-lg hover:border-red-200 bg-gradient-to-r from-yellow-50 to-red-50 hover:shadow-md transition-all">
                <a
                  href="#"
                  className="text-red-700 text-lg font-bold hover:text-red-800 underline block mb-2"
                >
                  Indian Polity - Fundamental Rights Analysis
                  <span className="ml-2 animate-pulse">🎯</span>
                </a>
                <p className="text-gray-700 mb-2">
                  Comprehensive analysis of Fundamental Rights under Indian
                  Constitution with recent amendments and case studies.
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-red-600">
                  <span>📚 Polity</span>
                  <span>📅 15 March 2023</span>
                  <span>🏷️ #Constitution #Rights</span>
                </div>
              </div>

              {/* Result Item */}
              <div className="p-6 border-2 border-yellow-100 rounded-lg hover:border-red-200 bg-gradient-to-r from-yellow-50 to-red-50 hover:shadow-md transition-all">
                <a
                  href="#"
                  className="text-red-700 text-lg font-bold hover:text-red-800 underline block mb-2"
                >
                  Current Affairs Monthly Digest - February 2023
                  <span className="ml-2">📈</span>
                </a>
                <p className="text-gray-700 mb-2">
                  Monthly compilation of important national and international
                  events with expert analysis.
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-red-600">
                  <span>📚 Current Affairs</span>
                  <span>📅 1 March 2023</span>
                  <span>🏷️ #MonthlyDigest #2023</span>
                </div>
              </div>
            </div>

            {/* Pagination */}
            <div className="flex justify-center gap-4 py-8">
              {[1, 2, 3, 4, 5].map((page) => (
                <button
                  key={page}
                  className={`px-4 py-2 rounded-lg font-bold ${
                    page === 1
                      ? "bg-red-600 text-white hover:bg-red-700"
                      : "border-2 border-yellow-300 text-red-700 hover:bg-yellow-50"
                  } transition-all`}
                >
                  {page}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default SearchPage;
