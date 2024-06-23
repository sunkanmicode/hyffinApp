

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

const ROOT_URL = "https://wellpro-server.onrender.com/api";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: ROOT_URL,
  withCredentials: true,
  // headers: {
  //   "Content-Type": "multipart/form-data", // This is important for form data
  // },
});

export const getAllResults = async(page: number)=>{
    try {
        const res = await axiosInstance.get(`/product/allResults?limit=10&page=${page}`);
        return res.data
    } catch (error) {
        console.error(error, "get-results")
        throw error
    }
}