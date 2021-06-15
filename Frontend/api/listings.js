import api from "./index";

const getListings = (category) => api.get("/list/"+category);




export default {
  // addListing,
  getListings,
};
