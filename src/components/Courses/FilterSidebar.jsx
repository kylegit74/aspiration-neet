import { useContext, useState, useEffect } from "react";
import { videoContext } from "../ContextApi/HomePageVideoContext";
import FetchAllCourses from "../../Services/Course/FetchAllCourse";
// Added Targeted exams
function FilterSideBar() {
  const { category, setCategory, isclickoncoursecategory } =
    useContext(videoContext);
  const [courses, setCourses] = useState([]);

  // State to toggle filter sections
  const [showFilters, setShowFilters] = useState({
    mode: false,
    class: false,
    courseType: false,
    duration: false,
    category: false,
  });

  useEffect(() => {
    async function fetchCourses() {
      try {
        const fetchedCourses = await FetchAllCourses();
        setCourses(fetchedCourses.data.slice(0, 3));
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    }
    fetchCourses();
  }, []);

  let Getuniquecategory = [];

  if (isclickoncoursecategory !== "") {
    if (!Getuniquecategory.includes(isclickoncoursecategory)) {
      Getuniquecategory.push(isclickoncoursecategory);
    }
  } else {
    const getcategory = courses.map((course) => course.category);

    getcategory.forEach((cat) => {
      if (cat !== "" && !Getuniquecategory.includes(cat)) {
        Getuniquecategory.push(cat);
      }
    });
  }

  function handleCheck(e) {
    const value = e.target.value;
    setCategory((prevCategories) =>
      prevCategories.includes(value)
        ? prevCategories.filter((cat) => cat !== value)
        : [...prevCategories, value]
    );
  }

  function toggleFilter(filterName) {
    setShowFilters((prev) => ({
      ...prev,
      [filterName]: !prev[filterName],
    }));
  }
  useEffect(() => {
    console.log("category", category);
  }, [category]);

  useEffect(() => {
    setCategory([]);
    console.log("getunique", Getuniquecategory); // Clears all selected filters
  }, []);

  return (
    <div className="w-full lg:w-[20%] min-h-[20vh] lg:min-h-screen bg-white p-4 lg:p-6 shadow-xl">
      <h2 className="text-red-600 text-lg lg:text-xl font-bold mb-4 lg:mb-6 mt-2 border-b-2 border-yellow-500 pb-2 lg:pb-3">
        Filter Courses
      </h2>

      {/* Targeted exam filter*/}

      <div className="mb-2 lg:mb-4">
        <h3
          className="text-red-500 text-sm lg:text-base font-semibold mb-2 cursor-pointer flex justify-between items-center"
          onClick={() => toggleFilter("mode")}
        >
          Targeted Exams
        </h3>

        <div className="pl-4">
          {["JEE", "NEET", "JEE+NEET"].map((mode) => (
            <label
              key={mode}
              className="flex items-center text-gray-700 cursor-pointer"
            >
              <input
                type="checkbox"
                value={mode}
                onChange={handleCheck}
                className="mr-2 cursor-pointer appearance-none w-5 h-5 border-2 border-red-600 rounded bg-white checked:bg-red-600 checked:border-red-600 relative checked:before:content-['✔'] checked:before:text-white checked:before:absolute checked:before:top-1/2 checked:before:left-1/2 checked:before:-translate-x-1/2 checked:before:-translate-y-1/2 checked:before:text-sm font-bold flex items-center justify-center"
              />
              {mode}
            </label>
          ))}
        </div>
      </div>

      {/* Category Filter */}
      <div className="mb-2 lg:mb-4">
        <h3
          className="text-red-500 text-sm lg:text-base font-semibold mb-2 cursor-pointer flex justify-between items-center"
          onClick={() => toggleFilter("category")}
        >
          Categories
        </h3>
        {isclickoncoursecategory !== "" ? (
          <div className="pl-4 space-y-1 lg:space-y-2">
            <label className="flex items-center text-gray-700">
              <input
                type="checkbox"
                value={isclickoncoursecategory}
                checked={isclickoncoursecategory}
                className="mr-2 cursor-pointer appearance-none w-5 h-5 border-2 border-red-600 rounded bg-white checked:bg-red-600 checked:border-red-600 relative checked:before:content-['✔'] checked:before:text-white checked:before:absolute checked:before:top-1/2 checked:before:left-1/2 checked:before:-translate-x-1/2 checked:before:-translate-y-1/2 checked:before:text-sm font-bold flex items-center justify-center"
              />
              {isclickoncoursecategory}
            </label>
          </div>
        ) : (
          <div className="pl-4 space-y-1 lg:space-y-2">
            {Getuniquecategory.map((cat) => (
              <label
                key={cat}
                className="flex items-center text-gray-700 cursor-pointer"
              >
                <input
                  type="checkbox"
                  value={cat}
                  checked={category.includes(cat)}
                  onChange={handleCheck}
                  className="mr-2 cursor-pointer appearance-none w-5 h-5 border-2 border-red-600 rounded bg-white checked:bg-red-600 checked:border-red-600 relative checked:before:content-['✔'] checked:before:text-white checked:before:absolute checked:before:top-1/2 checked:before:left-1/2 checked:before:-translate-x-1/2 checked:before:-translate-y-1/2 checked:before:text-sm font-bold flex items-center justify-center"
                />
                {cat}
              </label>
            ))}
          </div>
        )}
      </div>
      {/* Mode Filter */}

      <div className="mb-2 lg:mb-4">
        <h3
          className="text-red-500 text-sm lg:text-base font-semibold mb-2 cursor-pointer flex justify-between items-center"
          onClick={() => toggleFilter("mode")}
        >
          Mode
        </h3>

        <div className="pl-4">
          {["Offline", "Online"].map((mode) => (
            <label
              key={mode}
              className="flex items-center text-gray-700 cursor-pointer"
            >
              <input
                type="checkbox"
                value={mode}
                onChange={handleCheck}
                className="mr-2 cursor-pointer appearance-none w-5 h-5 border-2 border-red-600 rounded bg-white checked:bg-red-600 checked:border-red-600 relative checked:before:content-['✔'] checked:before:text-white checked:before:absolute checked:before:top-1/2 checked:before:left-1/2 checked:before:-translate-x-1/2 checked:before:-translate-y-1/2 checked:before:text-sm font-bold flex items-center justify-center"
              />
              {mode}
            </label>
          ))}
        </div>
      </div>

      {/* Class Filter */}
      <div className="mb-2 lg:mb-4 cursor-pointer">
        <h3
          className="text-red-500 text-sm lg:text-base font-semibold mb-2 cursor-pointer flex justify-between items-center"
          onClick={() => toggleFilter("class")}
        >
          Class
        </h3>

        <div className="pl-4">
          {["XI", "XII", "Dropout"].map((cls) => (
            <label key={cls} className="flex items-center text-gray-700">
              <input
                type="checkbox"
                value={cls}
                onChange={handleCheck}
                className="mr-2 cursor-pointer appearance-none w-5 h-5 border-2 border-red-600 rounded bg-white checked:bg-red-600 checked:border-red-600 relative checked:before:content-['✔'] checked:before:text-white checked:before:absolute checked:before:top-1/2 checked:before:left-1/2 checked:before:-translate-x-1/2 checked:before:-translate-y-1/2 checked:before:text-sm font-bold flex items-center justify-center"
              />
              {cls}
            </label>
          ))}
        </div>
      </div>

      {/* Course Type Filter */}

      {/* Duration Filter */}
      <div className="mb-2 lg:mb-4 cursor-pointer">
        <h3
          className="text-red-500 text-sm lg:text-base font-semibold mb-2 cursor-pointer flex justify-between items-center"
          onClick={() => toggleFilter("duration")}
        >
          Duration
        </h3>

        <div className="pl-4">
          {["1 Year", "2 Years"].map((duration) => (
            <label key={duration} className="flex items-center text-gray-700">
              <input
                type="checkbox"
                value={duration}
                onChange={handleCheck}
                className="mr-2 cursor-pointer appearance-none w-5 h-5 border-2 border-red-600 rounded bg-white checked:bg-red-600 checked:border-red-600 relative checked:before:content-['✔'] checked:before:text-white checked:before:absolute checked:before:top-1/2 checked:before:left-1/2 checked:before:-translate-x-1/2 checked:before:-translate-y-1/2 checked:before:text-sm font-bold flex items-center justify-center"
              />
              {duration}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FilterSideBar;
