import { useState, useEffect } from 'react';

/** 특정 시간이 지난 후에 한 번만 이벤트가 실행되도록 하는 훅 */
function useDebounce<T>(value: T, delay: number): [T] {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value]);

  return [debouncedValue];
}

export default useDebounce;
