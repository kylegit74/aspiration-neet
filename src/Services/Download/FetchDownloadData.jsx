import axios from "axios";
import axiosInstance from "../Instance";
async function FetchAllDownloadData()
{
    try{
        const res=await axiosInstance.get('/api/download');
        return res.data

    }catch(error)
    {
        throw error;
    }

}
export default FetchAllDownloadData