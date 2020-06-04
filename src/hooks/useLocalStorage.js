import { useState } from 'react'

// Hook
export const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        const item = window.localStorage.getItem(key);
        // Return parsed JSON if item already exists, if it does not, then set to initial value
        return item ? JSON.parse(item) : initialValue;
    })

    const setValue = value => {
        // Save state
        setStoredValue(value);
        // Save to local storage
        window.localStorage.setItem(key, JSON.stringify(value));
      };

    return [storedValue, setValue]
}