import axios from "axios";
import axiosInstance from "../Instance";
async function FetchAllCourses()
{
    try{
        const res=await axiosInstance.get('/api/courses');
        return res.data;

    }catch(error)
    {
      throw error;
    }
}
export default FetchAllCourses;