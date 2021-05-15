// import axios from "axios";
// import CookieService from "./CookieService";

// const BASE_URL = "http://localhost:8000/api";

// const cookie = CookieService.get("access_token");

// const token = {
//   headers: {
//     Accept: "application/json",
//     "Content-type": "application/json",
//     Authorization: "Bearer " + cookie,
//   },
// };

// export default {
//   checkLogin: (login) => axios.post(`${BASE_URL}/login`, login),

//   register: (register) => axios.post(`${BASE_URL}/register`, register),

//   details: () => axios.get(`${BASE_URL}/details`, token),

//   logout: () => axios.get(`${BASE_URL}/logout`, token),

//   createPost: (post) => axios.post(`${BASE_URL}/unicorns`, post, token),
// };
