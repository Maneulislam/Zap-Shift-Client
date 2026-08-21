import axios from "axios";



const instanceAxios = axios.create({
    baseURL: "http://localhost:3000"
})

const useAxiosSecure = () => {


    return instanceAxios;

};

export default useAxiosSecure;