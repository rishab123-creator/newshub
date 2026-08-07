import { useState } from "react"
import { Link, NavLink } from "react-router-dom";
import { FaNewspaper } from "react-icons/fa";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";
import { BookmarkContext } from "../context/BookmarkContext";

export default function Navbar({ categories, search, setSearch }) {

    const { darkMode, setDarkMode } = useContext(ThemeContext);
    const {bookmarks}=useContext(BookmarkContext)
    const bg = darkMode ? "bg-gray-900" : "bg-white";
    const card = darkMode ? "bg-gray-800" : "bg-white";
    const text = darkMode ? "text-white" : "text-black";
    const [isOpen, setIsOpen] = useState(false);


    return (
        <nav className={`${bg} ${text}`}>
            <div className="flex justify-between items-center px-6 py-6 ">
                <div >
                    <Link to="/" className="flex items-center gap-3">
                        <FaNewspaper size={30} />
                        <h1 className="text-2xl font-bold">NewsHub</h1>
                    </Link>

                </div>

                <div className="flex-1 flex justify-center padding ">
                    <ul className="hidden md:flex flex-wrap items-center gap-6">{
                        categories.map((category) => {
                            return (
                                <li key={category}>
                                    <NavLink
                                        to={`/${category.toLowerCase()}`}
                                        className={({ isActive }) =>
                                            isActive
                                                ? "text-blue-600 font-semibold border-b-2 border-blue-600 transition-colors duration-200"
                                                : `${text} hover:text-blue-600 transition-colors duration-200`
                                        }
                                    >
                                        {category}
                                    </NavLink>
                                </li>
                            )
                        })

                    }
                        < li >
                            <NavLink to="/bookmarks" className={({isActive})=>isActive?"text-blue-600 font-semibold border-b-2 border-blue-600 transition-colors duration-200"
                            :`${text} hover:text-blue-600 transition-colors duration-200`}>
                                {bookmarks.length>0? `🔖 Bookmarks (${bookmarks.length})`:`🔖 Bookmarks`}
                            </NavLink>
                        </li>
                    </ul>
                </div>

                <div className=" hidden md:flex gap-2">
                    <input className={`border rounded-lg px-4 py-2 w-64 ${text} ${card}`}
                        value={search}
                        onChange={(event) => setSearch(event.target.value)}
                        placeholder="Search news.." />
                    <button className={` ${text} ${card} border rounded-lg p-2`} onClick={() => setSearch("")}>Clear</button>
                    <button onClick={() => setDarkMode(prev => !prev)}>{darkMode ? "☀️" : "🌙"}</button>
                </div>

                <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                    ☰
                </button>
            </div>
            {
                isOpen && <ul className="flex flex-col gap-3">{
                    categories.map((category) => {
                        return (
                            <li key={category}>
                                <NavLink
                                    to={`/${category.toLowerCase()}`}
                                    className={({ isActive }) =>
                                        isActive
                                            ? "text-blue-600 font-semibold border-b-2 border-blue-600 transition-colors duration-200"
                                            : `${text} hover:text-blue-600 transition-colors duration-200`
                                    }
                                >
                                    {category}
                                </NavLink>
                            </li>

                        )
                    })
                }
                </ul>
            }

        </nav >
    )
}

