import React, { useState, useEffect, createContext } from "react";

export const videoContext = createContext();

function VideoContextProvider({ children }) {
  const [isvideoskip, setisvideoskip] = useState();
  const [coursesearchquery, Setcoursesearchquery] = useState();

  // Load from localStorage or use default values
  const [category, setCategory] = useState(() => {
    const savedCategory = localStorage.getItem("category");
    return savedCategory ? JSON.parse(savedCategory) : [];
  });

  const [isclickoncoursecategory, setisclickoncoursecategory] = useState(() => {
    return localStorage.getItem("isclickoncoursecategory") || null;
  });

  const [price, setPrice] = useState();

  // Save category to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("category", JSON.stringify(category));
  }, [category]);

  // Save isclickoncoursecategory to localStorage whenever it changes
  useEffect(() => {
    if (isclickoncoursecategory !== null) {
      localStorage.setItem("isclickoncoursecategory", isclickoncoursecategory);
    }
  }, [isclickoncoursecategory]);

  // Debugging: Log changes to search query
  useEffect(() => {
    console.log("coursesearchquery", coursesearchquery);
  }, [coursesearchquery]);

  return (
    <videoContext.Provider
      value={{
        isvideoskip,
        setisvideoskip,
        setisclickoncoursecategory,
        isclickoncoursecategory,
        Setcoursesearchquery,
        coursesearchquery,
        price,
        setPrice,
        category,
        setCategory,
      }}
    >
      {children}
    </videoContext.Provider>
  );
}

export default VideoContextProvider;
