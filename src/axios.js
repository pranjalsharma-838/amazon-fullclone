import axios from "axios";

const instance=axios.create({
    
    baseURL:"https://amzoncloie.herokuapp.com/"
})

export default instance;