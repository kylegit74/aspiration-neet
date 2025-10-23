
import axiosInstance from "../Instance"

async  function GetCourseById(id)
{
    try{
        const res=await axiosInstance.get(`/api/course/${id}`);
        return res.data;

    }catch(error)
    {
     return error;
    }
}
export default GetCourseById