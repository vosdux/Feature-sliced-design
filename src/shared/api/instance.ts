import ky from "ky";

export const apiInstance = ky.create({
    prefixUrl: import.meta.env.VITE_API_URL,
});