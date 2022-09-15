import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const api = axios.create({
  withCredentials: true,
});

api.interceptors.request.use((config: AxiosRequestConfig) => {
  config.headers!.Authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
});

api.interceptors.response.use(
  (config: AxiosResponse) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response.status === 401 &&
      originalRequest &&
      !originalRequest._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        const response = await axios.get("/users/refresh", {
          withCredentials: true,
        });
        localStorage.setItem("token", response.data.accessToken);
        return await api.request(originalRequest);
      } catch (error) {
        return;
      }
    }
    throw error;
  }
);

export { api };
