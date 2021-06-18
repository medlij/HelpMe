import api from "./index";

const register = (userInfo) => api.post("/register", userInfo);
const update = (id, data) => api.put("/update/" + id, data);
const myDetails = (id) => api.get("/myDetails/"+id);

export const updateProfile = (profile, id, onUploadProgress) => {
    const data = new FormData();
    data.append("name", profile.name);
    data.append("hourly_rate", profile.hourly_rate);
    data.append("bio", profile.bio);

  profile.image((image) =>
    data.append( {
      type: "image/jpeg",
      uri: image,
    })
  );

  if (profile.location)
    data.append("location", JSON.stringify(profile.location));

  return api.put("/update/"+id, data, {
    onUploadProgress: (progress) =>
      onUploadProgress(progress.loaded / progress.total),
  });
};  

export default { register, update, myDetails, updateProfile };
