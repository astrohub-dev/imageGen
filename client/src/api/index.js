import axios from "axios";


const API = axios.create({
    baseURL: "https://imagegen-hoqm.onrender.com/api/"
});

export const GetPosts = async () => await API.get("/post/");
export const CreatePost = async (data) => await API.post("/post/", data);
export const GenerateAIImage = async (data) => await API.post("/generateImage/", data);