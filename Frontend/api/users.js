import api from "./index";

const register = (userInfo) => api.post("/register", userInfo);
const update = (id, data) => api.put("/update/" + id, data);
const myDetails = () => api.get("/myDetails/");
export default { register, update, myDetails };
