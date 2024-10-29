import axios from "axios";

const instance = axios.create({
  baseURL: "http://api.themoviedb.org/3",
  params: {
    api_key:"2641251ca7cf5bdafa039111c76df430",
    language:"ko-KR"
  }
})

export default instance