export default async function handler(request, response) {
    try {
        const { category } = request.query;

        const API_KEY = process.env.GNEWS_API_KEY;

        if (!API_KEY) {
            return response.status(500).json({
                error: "GNews API key is not configured"
            });
        }

        const url = new URL(
            "https://gnews.io/api/v4/top-headlines"
        );

        url.searchParams.set("country", "us");
        url.searchParams.set("token", API_KEY);

        if (category) {
            url.searchParams.set("category", category);
        }

        const newsResponse = await fetch(url);

        const data = await newsResponse.json();

        if (!newsResponse.ok) {
            return response.status(newsResponse.status).json(data);
        }

        return response.status(200).json(data.articles);

    } catch (error) {
        return response.status(500).json({
            error: error.message
        });
    }
}