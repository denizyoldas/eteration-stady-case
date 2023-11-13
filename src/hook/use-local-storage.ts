import { useState, Dispatch, SetStateAction } from "react";

const useLocalStorage = <T>(
  key: string,
  initialValue: T
): [T, Dispatch<SetStateAction<T>>] => {
  const storedValue = localStorage.getItem(key);
  const initial: T = storedValue ? JSON.parse(storedValue) : initialValue;

  const [value, setValue] = useState<T>(initial);

  const setStoredValue: Dispatch<SetStateAction<T>> = (
    newValue: SetStateAction<T>
  ) => {
    setValue((prevValue: T) => {
      const finalValue =
        typeof newValue === "function"
          ? (newValue as (prevValue: T) => T)(prevValue)
          : newValue;
      localStorage.setItem(key, JSON.stringify(finalValue));
      return finalValue;
    });
  };

  return [value, setStoredValue];
};

export default useLocalStorage;
