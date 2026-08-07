import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"
import { BookmarkContext } from "../context/BookmarkContext";
import { FaRegHeart, FaHeart } from "react-icons/fa";

export default function ArticleCard({ article }) {
    const { darkMode, setDarkMode } = useContext(ThemeContext);
    const bg = darkMode ? "bg-gray-900" : "bg-white";
    const card = darkMode ? "bg-gray-800" : "bg-white";
    const text = darkMode ? "text-white" : "text-black";

    const { isBookmarked, toggleBookmark } = useContext(BookmarkContext);

    const bookmarked = isBookmarked(article.url);
    return (
        <article className={` ${card}  rounded-xl 
        shadow-md overflow-hidden
        hover:shadow-2xl hover:scale-105 hover:-translate-y-2
        transition-all duration-300 ease-in-out`} >
            {
                article.image
                    ? <img className=" w-full h-52 sm:h-56 lg:h-48 object-cover"
                        src={article.image}
                        alt={article.title} />
                    : <div className="w-full h-52 sm:h-56 lg:h-48 flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-700">
                        <span className="text-5xl">📰</span>
                        <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
                            No Image Available
                        </p>
                    </div>
            }

            <div className="flex flex-col p-5">

                <h2 className={`${text} text-lg md:text-xl font-bold mt-3`}>{article.title ?? "Unknown Author"}</h2>
                <br></br>
                <p className={`${text} text-sm md:text-base`}>{article.description ?? "Unknown Description"}</p>
                <br></br>
                <p className={`${text} text-sm md:text-base font-medium`}>{article.author ?? "Unknown Author"}</p>
                <br></br>
                <p className={`${text} text-sm md:text-base font-medium`}>{article.source?.name ?? "Unknown Source"}</p>
                <button onClick={() => toggleBookmark(article)}>
                    {bookmarked ? <FaHeart /> : <FaRegHeart />}
                </button>
                <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto self-end text-blue-600 hover:text-blue-800 font-medium"
                >
                    Read More →
                </a>

            </div>



        </article>
    )
}