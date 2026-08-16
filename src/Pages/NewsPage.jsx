import { useState, useEffect } from "react"
import ArticleCard from "../components/ArticleCard";
import ArticleSkeleton from "../components/ArticleSkeleton";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";
import { useNews } from "../hooks/useNews";

export default function NewsPage({ category, search }) {

    const {
        articles,
        loading,
        error,
        fetchNews
    } = useNews(category);

    const { darkMode, setDarkMode } = useContext(ThemeContext);

    const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
    const API_URL = `https://newsapi.org/v2/top-headlines?country=us${category ? `&category=${category}` : ""
        }&apiKey=${API_KEY}`;
    const bg = darkMode ? "bg-gray-900" : "bg-gray-100";
    const text = darkMode ? "text-white" : "text-black";

    const filteredArticles = articles.filter((article) => {
        const query = search.toLowerCase();

        return (
            article.title.toLowerCase().includes(query) ||
            (article.description ?? "").toLowerCase().includes(query)
        );
    });







    if (loading) {
        return (
            Array.from({ length: 6 }).map((_, index) => (
                <ArticleSkeleton key={index} />
            ))
        )
    }

    if (error) {
        return (
            <div className={`${bg} ${text} min-h-screen 
            flex flex-col items-center justify-center gap-4`}>
                <h2 className="text-2xl font-bold text-red-500">
                    ⚠️ Failed to load news
                </h2>

                <p>{error}</p>

                <button
                    onClick={fetchNews}
                    className="px-5 py-2 bg-blue-600 
                    text-white rounded-lg hover:bg-blue-700"
                >
                    Retry
                </button>
            </div>
        );
    }

    if (filteredArticles.length == 0) {
        return (
            <div className={`${bg} ${text} min-h-screen 
            flex flex-col min-h-screen justify-center
             items-center text-center`}>
                <h2 className="text-xl font-semibold">No Articles Found</h2>
                <h2 className="text-gray-500 mt-2">Try another Keyword</h2>
            </div>
        )

    }

    return (
        <div className={`${bg} ${text} min-h-screen`}>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredArticles.map((article) => (
                        <ArticleCard
                            key={article.url}
                            article={article}
                        />
                    ))}
                </div>

            </div>

        </div>

    )
}