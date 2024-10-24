import React, { createContext, useContext, useState } from "react";
import { useLocalStorage } from "@uidotdev/usehooks";

const ThemeContext = createContext();

export const ThemeProdiver = ({children}) => {
    const [themeState, setThemeState] = useLocalStorage("theme", 1);


    const changeThemeState = () => {
        if(themeState < 3){
            setThemeState(themeState + 1);
        }
        else{
            setThemeState(1);
        }
        
    }

    return <ThemeContext.Provider value={{themeState, changeThemeState}}>{children}</ThemeContext.Provider>
};

export const useTheme = () => useContext(ThemeContext);