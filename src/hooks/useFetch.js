'use client';

import { useState, useEffect } from 'react';

export default function useFetch(endpoint, alert = undefined) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(endpoint);
      if (!response.ok) {
        setData(undefined);
        return;
      }
      setData(await response.json());
    }
    fetchData();
  }, [endpoint, alert]);

  return data;
}
