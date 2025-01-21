import axios from "axios";

// const baseURL = "https://pwd-kainakap-server.vercel.app/api/v1";
const localURL = "https://new-kainakap.onrender.com/api/v1";

export default axios.create({
  baseURL: localURL,
});

export const axiosPrivate = axios.create({
  baseURL: localURL,
  withCredentials: true,
});
