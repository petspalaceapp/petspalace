import { useEffect, useState } from 'react';

function useDebounce(value: string, delay: number): { debounceValue: string } {
  const [inputValue, setInputValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      clearTimeout(timer);
      setInputValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  // const handleDebounce = (cb: any, delay: number) => {
  //   let timeout: any
  //   return (...args: any) => {
  //     clearTimeout(timeout)
  //     timeout = setTimeout(() => {
  //       cb(...args)
  //     }, delay)
  //   }
  // }

  return { debounceValue: inputValue };
}

export default useDebounce;
