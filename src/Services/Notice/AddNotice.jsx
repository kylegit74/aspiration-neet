import axiosInstance from "../Instance";

async function AddNotice(text) {
  try {
    const res = await axiosInstance.post('/api/v1/notice/create', { text });  // Pass text inside an object
    return res.data;
  } catch (error) {
    console.error("Error in AddNotice:", error);
    return { success: false, message: "Failed to create notice" };
  }
}

export default AddNotice;
