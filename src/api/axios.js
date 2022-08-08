import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params:{
        api_key:"344010bdb08465cccc429771908599c8" ,
        language:"ko-KR",
    },
});

export default instance;