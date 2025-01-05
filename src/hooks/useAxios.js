import { useState } from "react";
import axios from "axios";

function useAxios() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetch = async (options) => {
        setLoading(true);
        setError(null);

        try {
            const response = await axios({
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
