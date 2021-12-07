import { useEffect, useState } from "react";

export const useFetch = () => {

  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const json = await fetch('DB.json');
        const response = await json.json();
        setResponse(response);
      } catch(error) {
        setError(error)
      }
    }
    fetchData();
  }, []);

  return { response, error };
};