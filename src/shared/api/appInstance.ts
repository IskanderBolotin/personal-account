import axios from "axios";

const appInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_DOMAIN}/api`,
  headers: {
    "Content-Type": "application/json",
  },
});

export { appInstance };
