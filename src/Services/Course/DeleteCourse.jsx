import { Rss } from "lucide-react";
import axiosInstance from "../Instance"

async  function DeleteCourse(id)
{
    try{
        const res=await axiosInstance.delete(`/api/v1/courses/delete/${id}`);
        return res.data;

    }catch(error)
    {
     return error;
    }
}
export default DeleteCourse