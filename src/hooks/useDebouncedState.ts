import { useState, useEffect } from 'react';

export default function useDebouncedState<T>(
  value: T,
  milliseconds: number,
): T {
  const [state, setState] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setState(value);
    }, milliseconds);

    return () => {
      clearTimeout(timer);
    };
  }, [value, milliseconds]);

  return state;
}
