export const getImageUrl = (url) => {
    const BASE_URL = process.env.REACT_APP_BASE_URL
    return `${BASE_URL}${url}`;
};