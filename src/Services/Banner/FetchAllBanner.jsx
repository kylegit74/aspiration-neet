import axiosInstance from "../Instance";

async function FetchAllBanner() {
  try {
    const res = await axiosInstance.get("/api/banners");
    console.log('rejdjjds',res.data)
    return res.data;
  } catch (error) {
    console.error("Error fetching banners:", error);
    throw error;
  }
}

export default FetchAllBanner;
