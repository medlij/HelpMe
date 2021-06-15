import api from "./index";

const getReviews = (id) => api.get("/review/get/" + id);
const getName = (c_id) => api.get("/userDetails/" + c_id);
const postReview = (data) => api.post("/review/post/", data);

// export const addReview = (review, onUploadProgress) => {
//   const data = new FormData();
//   data.append("title", listing.title);
//   data.append("price", listing.price);
//   data.append("categoryId", listing.category.value);
//   data.append("description", listing.description);

//   listing.images.forEach((image, index) =>
//     data.append("images", {
//       name: "image" + index,
//       type: "image/jpeg",
//       uri: image,
//     })
//   );

//   if (listing.location)
//     data.append("location", JSON.stringify(listing.location));

//   return client.post(endpoint, data, {
//     onUploadProgress: (progress) =>
//       onUploadProgress(progress.loaded / progress.total),
//   });
// };

export default {
  getReviews,
  getName,
  postReview,
};
