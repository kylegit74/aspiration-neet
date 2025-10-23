import axios from "axios";
import axiosInstance from "../Instance";
async function FetchTopnavbar()
{
    try{
        const res=await axiosInstance.get('/api/top_view_pdf_data');
        return res.data;

    }catch(error)
    {
        throw error;
    }

}
export default FetchTopnavbar