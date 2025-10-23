import axiosInstance from "../Instance";

async function UpdateCourse(id, formdata)
{
    try{
        console.log('formdata',formdata)
        const res=await axiosInstance.put(`/api/v1/courses/edit/${id}`,formdata);
        console.log('res',res)
        return res.data;

    }catch(error)
    {
        throw error;
    }

}
export default UpdateCourse;