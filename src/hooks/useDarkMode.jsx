import { useEffect } from "react";
import { useLocalStorage } from "./useToLocalStorage";

export function useDarkMode(props) {

  const [darkMode, setDarkMode] = useLocalStorage(props);

  useEffect(() => {
    darkMode
      ? document.body.classList.add("dark-mode")
      : document.body.classList.remove("dark-mode");
  }, [darkMode]);

  return [darkMode, setDarkMode];
}
