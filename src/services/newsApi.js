const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export async function getNews(category) {
    const API_URL = `https://gnews.io/api/v4/top-headlines?country=us${
    category ? `&category=${category}` : ""
}&token=${API_KEY}`;

    const response = await fetch(API_URL);

    if (!response.ok) {
        throw new Error(`RequestFailed : ${response.status} ${response.statusText}`);
    }

    const data = await response.json();


    return data.articles;
}