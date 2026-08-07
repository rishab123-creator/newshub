import { useContext } from "react"
import { BookmarkContext } from "../context/BookmarkContext"
import { ThemeContext } from "../context/ThemeContext";
import ArticleCard from "../components/ArticleCard";


export default function BookmarksPage(){

    const {bookmarks}=useContext(BookmarkContext);
    const {darkMode,setDarkMode}=useContext(ThemeContext)
    const bg = darkMode ? "bg-gray-900" : "bg-gray-100";
    const text = darkMode ? "text-white" : "text-black";
    return (
            <div className={`${bg} ${text} min-h-screen max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8 py-6`}>
                <div className=" grid grid-cols-1  
            md:grid-cols-2 lg:grid-cols-3
            gap-6 
            ">
                    {
                        bookmarks.map((article) => (
                            <ArticleCard
                                key={article.url}
                                article={article} />
                        ))
                    }
                </div>
            </div>
    
        )
}