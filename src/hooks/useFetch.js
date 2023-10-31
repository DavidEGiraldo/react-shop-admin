'use client';

import { useState, useEffect } from 'react';

export default function useFetch(endpoint, alert = undefined) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(endpoint);
      if (!response.ok) {
        setData(undefined);
      }
      setData(await response.json());
    }
    try {
      fetchData();
    } catch (error) {
      console.error(error.message);
    }
  }, [endpoint, alert]);

  return data;
}
