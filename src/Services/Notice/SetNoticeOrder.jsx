import axiosInstance from "../Instance";
async function UpdateOrder(notices)
{

console.log('notice',notices)
    try{
        const updated=await axiosInstance.post('/api/v1/notice/editorder',notices)
        console.log('updated',updated)
        return updated
    }
    catch(error)
    {
        return error;
    }
}
export default UpdateOrder;