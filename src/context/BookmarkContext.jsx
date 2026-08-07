import { createContext } from "react";
import { useState, useEffect } from "react";
import toast from "react-hot-toast"


export const BookmarkContext = createContext();

export function BookmarkProvider({ children }) {

    const [bookmarks, setBookMarks] = useState(() => {
        return JSON.parse(localStorage.getItem("bookmarks")) || [];//as getItem return string and we will store something like "[]" so convert it back to array.
    });

    useEffect(() => {
        localStorage.setItem("bookmarks", JSON.stringify(bookmarks));//setItem needs key value 
    }, [bookmarks]);

    const isBookmarked = (url) => {
        return bookmarks.some(
            (bookmark) => bookmark.url === url
        );
    };

    const toggleBookmark = (article) => {
        if (isBookmarked(article.url)) {
            setBookMarks(
                bookmarks.filter((bookmark) => bookmark.url !== article.url
            )
            );
            toast.success("Removed from Bookmarks");
        } else {
            setBookMarks([...bookmarks, article]);
            toast.success(`Saved ${article.length>40?article.title.slice(0,40)+"...":article.title}`);
        }
    }

    return (
        <BookmarkContext.Provider
            value={{ bookmarks, isBookmarked, toggleBookmark }}
        >
            {children}
        </BookmarkContext.Provider>
    )
}