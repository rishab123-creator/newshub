export async function getNews(category) {

    const API_URL = `/api/news${
        category ? `?category=${category}` : ""
    }`;

    const response = await fetch(API_URL);

    const data = await response.json();

    if (!response.ok) {
        throw new Error(
            data.error ||
            data.message ||
            `Request Failed: ${response.status}`
        );
    }

    return data;
}