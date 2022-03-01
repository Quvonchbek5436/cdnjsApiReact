import axios from "axios";

// const instanceAxios = axios.create({
//     baseURL: "https://api.cdnjs.com",
//     //   headers: {
//     //     common: {
//     //       Authorization: "AUTH TOKEN",
//     //     },
//     //   },
// });
//
// instanceAxios.defaults.headers.common["Authorization"] = "AUTH_TOKEN";
//
// console.log(instanceAxios.defaults.headers);

export const getLibraries = async () => {
    try {
        const res = await axios.get(`https://api.cdnjs.com/libraries?limit=30`);
        console.log(res.data.results)
        return { success: true, data: res.data.results };
    } catch (error) {
        return { success: false };
    }
};

export const getLibrary = async (params) => {
    try {
        const res = await axios.get(`https://api.cdnjs.com/libraries/${params.name}`);
        return { success: true, data: res.data };
    } catch (error) {
        return { success: false };
    }
};
