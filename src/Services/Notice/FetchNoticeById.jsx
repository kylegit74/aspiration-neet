import axios from 'axios'
import axiosInstance from '../Instance'
async function FetchNoticeById(id)
{
    try{
        const res=await axiosInstance.get(`/api/notice/${id}`);
        return res.data;

    }catch(error)
    {
        throw error

    }

}
export default FetchNoticeById