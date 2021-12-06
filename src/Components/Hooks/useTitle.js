import { useEffect } from "react";

export function useTitle(shopTitle) {
  useEffect(() => {
    document.title = shopTitle;
  })
} 