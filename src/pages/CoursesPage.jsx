import { useContext, useEffect, useState } from "react";

import CourseCard from "../components/Courses/CourseCard";
import FilterSideBar from "../components/Courses/FilterSidebar";
import { videoContext } from "../components/ContextApi/HomePageVideoContext";
import MainLayout from "../layouts/MainLayout";

export default function CoursesPage() {
    const { Setcoursesearchquery } = useContext(videoContext);
    const [query, setquery] = useState();
    
    useEffect(() => {
        Setcoursesearchquery(query);
    }, [query]);

    return (
        <MainLayout>
            <div className="min-h-screen bg-gradient-to-br mt-[110px] from-red-50 to-yellow-50 overflow-x-hidden">
                <div className="flex flex-col lg:flex-row">
                    <FilterSideBar />
                    <div className="flex-1 p-4 lg:p-8">
                        <div className="mb-8 max-w-xl mx-auto">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search for courses..."
                                    value={query}
                                    onChange={(e) => setquery(e.target.value)}
                                    className="w-full px-4 py-3 lg:px-6 lg:py-4 rounded-lg lg:rounded-xl border-2 border-gray-200 focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-100 transition-all"
                                />
                                <svg
                                    className="w-5 h-5 lg:w-6 lg:h-6 absolute right-3 top-3 lg:right-4 lg:top-4 text-gray-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                            </div>
                        </div>
                        <CourseCard />
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}