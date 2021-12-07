import { useState } from "react";

export function useOrderConfirm() {
  const [openOrderConfirm, setOpenOrderConfirm] = useState(null);

  return { openOrderConfirm, setOpenOrderConfirm };
}