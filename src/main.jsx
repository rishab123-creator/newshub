import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvieder } from './context/ThemeContext.jsx'
import { BookmarkProvider } from './context/BookmarkContext.jsx'
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvieder>
        <BookmarkProvider>
          <Toaster position="top-right" />
          <App />
        </BookmarkProvider>
      </ThemeProvieder>
    </BrowserRouter>
  </StrictMode>,
)
