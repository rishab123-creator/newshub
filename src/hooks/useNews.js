import { getNews  } from "../services/newsApi";
import { useState,useEffect } from "react";


export function useNews(category) {

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    async function fetchNews() {
        setError(null);
        setLoading(true);
        try {
           const articles=await getNews(category);

           setArticles(articles);

        } catch (error) {
            setError(error.message);
        } finally { 
            setLoading(false);
        }

    }


    useEffect(() => {
        fetchNews();
    }, [category])

    return {
        articles,
        loading,
        error,
        fetchNews
    }
}

