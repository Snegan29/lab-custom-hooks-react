
import { useState, useEffect } from 'react';

const useStorage = (key, initialValue) => {
  const getStoredValue = () => {
    const storedValue = window.localStorage.getItem(key) || window.sessionStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialValue;
  };

  const [value, setValue] = useState(getStoredValue);

  useEffect(() => {
    const serializedValue = JSON.stringify(value);
    window.localStorage.setItem(key, serializedValue);
    window.sessionStorage.setItem(key, serializedValue);
  }, [key, value]);

  return [value, setValue];
};

export default useStorage;
