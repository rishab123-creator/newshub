const API_KEY = import.meta.env.VITE_GNEWS_API_KEY;


export async function getNews(category) {
    const API_URL = `https://gnews.io/api/v4/top-headlines?country=us${
        category ? `&category=${category}` : ""
    }&token=${API_KEY}`;

    console.log("Request URL:", API_URL);

    const response = await fetch(API_URL);

    // Parse the response only once
    const data = await response.json();

    console.log(data);
    
    if (!response.ok) {
        throw new Error(
            data.errors?.[0] ||
            data.message ||
            `Request Failed: ${response.status}`
        );
    }

    return data.articles;
}