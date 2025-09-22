import { deleteCookie, getCookie, setCookie } from "@/utils/cookie";
import axios from "axios";


const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    Accept: "application/json",
    "x-api-key": process.env.NEXT_PUBLIC_X_API_KEY,
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

api.interceptors.request.use(
  (config) => {
    const token = getCookie("access_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (originalRequest.url?.includes("/accounts/refresh-token/")) {
      console.error("Refresh token request failed");
      redirectToLogin();
      return Promise.reject(error);
    }

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        console.log("Attempting to refresh token using HTTP-only cookie...");

        const refreshResponse = await axios.post(
          `${import.meta.env.VITE_BASE_URL}/accounts/refresh-token/`,
          {},
          {
            headers: {
              "x-api-key": import.meta.env.VITE_X_API_KEY,
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );

        console.log("Refresh token response:", refreshResponse.data);

        const newAccessToken =
          refreshResponse.data?.access_token || refreshResponse.data?.access;

        if (!newAccessToken) {
          throw new Error("No access token in response");
        }

        setCookie("access_token", newAccessToken);

        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return api(originalRequest);
      } catch (refreshError) {
        console.error("Refresh token error:", {
          status: refreshError.response?.status,
          data: refreshError.response?.data,
        });

        redirectToLogin();
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

function redirectToLogin() {
  if (window.location.pathname === "/login") return;

  deleteCookie("access_token");

  if (!localStorage.getItem("auth_redirect")) {
    localStorage.setItem("auth_redirect", "true");
    window.location.href = "/login";
    setTimeout(() => {
      localStorage.removeItem("auth_redirect");
    }, 1000);
  }
}

export default api;