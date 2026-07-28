import api from "./api";

export const authApi = {
  login(credentials) {
    return api.post("/auth/login", credentials);
  },

  getProfile() {
    return api.get("/auth/profile");
  },
};