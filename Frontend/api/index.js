import { create } from "apisauce";
// import cache from "../utility/cache";
// import authStorage from "../auth/storage";
// import settings from "../config/settings";

const api = create({
  // baseURL: settings.apiUrl,
  baseURL: "https://bca5ff078837.ngrok.io/api",
});

// api.addAsyncRequestTransform(async (request) => {
//   const authToken = await authStorage.getToken();
//   if (!authToken) return;
//   request.headers["x-auth-token"] = authToken;
// });

// const get = api.get;
// apiClient.get = async (url, params, axiosConfig) => {
//   const response = await get(url, params, axiosConfig);

//   if (response.ok) {
//     cache.store(url, response.data);
//     return response;
//   }

//   const data = await cache.get(url);
//   return data ? { ok: true, data } : response;
// };

export default api;
