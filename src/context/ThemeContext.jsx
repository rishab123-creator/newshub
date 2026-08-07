import { createContext } from "react";
import { useState,useEffect } from "react";

export const ThemeContext = createContext();

export function ThemeProvieder({ children }) {
   
    const [darkMode,setDarkMode]=useState(()=>{
        return localStorage.getItem("theme")=="dark";
    });

    useEffect(()=>{
        localStorage.setItem("theme",darkMode?"dark":"light");
    },[darkMode]);//key value


    return (
        <ThemeContext.Provider
            value={{ darkMode, setDarkMode }}
        >
            {children}
        </ThemeContext.Provider>
    );
}