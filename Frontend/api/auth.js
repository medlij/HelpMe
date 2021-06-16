import api from "./index";

const login = (info) => api.post("/login", info);

export default {
  login,
};
