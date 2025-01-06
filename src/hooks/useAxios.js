import { useState } from "react";
import axios from "axios";

function useAxios() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Set up an axios instance with the base URL
    const axiosInstance = axios.create({
        baseURL: process.env.REACT_APP_BASE_URL || "https://kingswood-british-collage.vercel.app",
    });

    const fetch = async (options) => {
        setLoading(true);
        setError(null);

        try {
            const response = await axiosInstance({
                ...options,
            });
            setData(response.data);
            setLoading(false);
            return response;
        } catch (err) {
            setError(err);
            setData(null);
            setLoading(false);
            throw err;
        }
    };

    return { data, loading, error, fetch };
}

export default useAxios;
