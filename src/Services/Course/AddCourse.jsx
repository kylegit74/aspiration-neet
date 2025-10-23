import axiosInstance from "../Instance";

async function AddCourse(formData)
{
try{
    const res=await axiosInstance.post('/api/v1/courses/create',formData);
    return res.data;
}catch(error)
{
    throw error
}
}
export default AddCourse;