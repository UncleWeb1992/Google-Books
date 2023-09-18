import { useRef, useState } from "react";

export function useDebaunce(val: any, ms: number) {
  const [value, setValue] = useState();
  const timeout = useRef<NodeJS.Timeout>(null);

  if (timeout.current) {
    clearTimeout(timeout.current);
  }

  timeout.current = setTimeout(() => {
    setValue(val);
  }, ms);

  return value;
}
