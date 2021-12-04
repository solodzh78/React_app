import { useState } from "react";

export function useCount(openItem) {

  const readyCount = openItem.count ? openItem.count : 1;

  const [count, setCount] = useState(readyCount);

  const onChange = e => setCount(e.target.value);

  return { count, setCount, onChange };
}