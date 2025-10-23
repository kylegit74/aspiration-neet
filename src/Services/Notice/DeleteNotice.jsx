import axiosInstance from "../Instance";
async function DeleteNotice(id)
{
    try{
        const res=await axiosInstance.delete(`/api/v1/notice/delete/${id}`);
        return res.data;

    }catch(error)
    {
        throw error;
    }

}
export default DeleteNotice;