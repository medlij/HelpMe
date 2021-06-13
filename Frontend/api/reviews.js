import api from "./index";

const getReviews = (id) => api.get("/review/get/"+id);
const getName = (c_id) => api.get("/userDetails/"+c_id);
export default {
    getReviews,
    getName
  };