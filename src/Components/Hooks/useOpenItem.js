import { useState } from "react";
import { useTitle } from "./useTitle";
import { defaultShopTitle } from "../../settings";

export function useOpenItem() {
  const [openItem, setOpenItem] = useState(null);
  const shopTitle = openItem ? openItem.name : defaultShopTitle;
  useTitle(shopTitle);
  return { openItem, setOpenItem };
}