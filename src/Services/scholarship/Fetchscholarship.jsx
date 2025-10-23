import axios from "axios";
import axiosInstance from "../Instance";
async function FetchScholarship()
{
    try{
        const res=await axiosInstance.get('/api/scholar');
        return res.data

    }catch(error)
    {
        throw error;

    }
}
export default FetchScholarship