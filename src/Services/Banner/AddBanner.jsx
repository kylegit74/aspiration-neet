import axios from "axios";
import axiosInstance from "../Instance";
async function AddBanner(formdata)
{
    try{
        const res=await axiosInstance.post('/api/v1/banner/create',formdata);
        return res.data;

    }catch(error)
    {
        return error;

    }

}
export default AddBanner;