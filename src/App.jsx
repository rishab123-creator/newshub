import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import NewsPage from "./Pages/NewsPage";
import BookmarksPage from "./Pages/BookmarksPage"


export default function App() {
  const categories = [
    "Health",
    "Business",
    "Sports",
    "Technology",
  ];
  const [search, setSearch] = useState("");
  return (
    <>
      <Navbar categories={categories}
        search={search}
        setSearch={setSearch} />
      <Routes>
        <Route path="/" element={<NewsPage search={search} />} />

        <Route
          path="/sports"
          element={<NewsPage category="sports" search={search} />}
        />

        <Route
          path="/health"
          element={<NewsPage category="health" search={search} />}
        />

        <Route
          path="/business"
          element={<NewsPage category="business" search={search} />}
        />

        <Route
          path="/technology"
          element={<NewsPage category="technology" search={search} />}
        />
        <Route
          path="/bookmarks"
          element={<BookmarksPage/>}
        />
      </Routes>
    </>
  )
}