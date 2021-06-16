import api from "./index";

const getListings = (category) => api.get("/list/" + category);
const getTaskerId = (id) => api.get("/getTaskerId/"+id);
const getProviderDetails = (t_id) => api.get("/taskerDetails/"+t_id)
export default {
  getTaskerId,
  getProviderDetails,
  getListings,
};
