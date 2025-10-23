import axiosInstance from "../Instance";

async function DeleteBanner(id)
{
    try{
        const res=await axiosInstance.delete(`/api/v1/banner/delete/${id}`);
        return res.data;

    }catch(error)
    {
       throw error;
    }

}
export default DeleteBanner;