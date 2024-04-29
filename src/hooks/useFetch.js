import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        // console.log(response);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const result = await response.json();
        setLoading(false);
        setData(result);
      } catch (error) {
        // console.log(error.message);
        setLoading(false);
        setError(error.message);
      }
    };
    fetchData();
  }, [url]);
  return { data, loading, error };
};
