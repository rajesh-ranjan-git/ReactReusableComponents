import { useEffect, useState } from "react";

export default function useThemeChanger(themeName, defaultValue) {
  const [newTheme, setNewTheme] = useState(() => {
    let currentTheme;

    try {
      currentTheme =
        JSON.parse(localStorage.getItem(themeName)) || String(defaultValue);
    } catch (error) {
      console.log("Error while setting theme : ", error);
      currentTheme = defaultValue;
    }

    return currentTheme;
  });

  useEffect(() => {
    localStorage.setItem(themeName, JSON.stringify(newTheme));
  }, [themeName, newTheme]);

  return [newTheme, setNewTheme];
}
