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

  useEffect(() => {
    if (isclickoncoursecategory) {
      localStorage.setItem("isclickoncoursecategory", isclickoncoursecategory);
    }
  }, [isclickoncoursecategory]);



  const [price, setPrice] = useState();

  // Save category to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("category", JSON.stringify(category));
  }, [category]);



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
