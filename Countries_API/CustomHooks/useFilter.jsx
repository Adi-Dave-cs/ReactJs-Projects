import { useEffect, useState } from "react";

export default function useFilter() {
  const [region, setRegion] = useState("");

  

  return [{ region, setRegion }];
}
