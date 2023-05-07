import apiCalls from "./apiRequest";

const uploadFile = async (file,type,owner,title,isRequired,data) => { //data: bizId , templateId , stepId 
    const allData = {
        ...data,
        type,
        owner ,
        title,
        isRequired
    }
    console.log("🚀 ~ file: index.jsx:30 ~ handleSubmitAnswer ~ data", allData)

    const formData = new FormData();
    formData.append("new_file", file);
    formData.append("data", JSON.stringify(allData))

    return await apiCalls('post', '/files/upload-file/', formData, true)
}
export default uploadFile