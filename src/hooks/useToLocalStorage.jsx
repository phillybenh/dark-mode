import { useState } from "react";

export function useLocalStorage(key, initialValue) {
  
    const [storedValue, setStoredvalue] = useState(() => {
    const item = window.localStorage.getItem(key);

    return item ? JSON.parse(item) : initialValue;
  });

  const setValue = (value) => {
    setStoredvalue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedValue, setValue];
}
