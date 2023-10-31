'use client';

import { useState, useEffect } from 'react';

export default function useFetch(endpoint, alert = false) {
  const [data, setData] = useState([]);

  async function fetchData() {
    const response = await fetch(endpoint);
    if (!response.ok) {
      setData(undefined);
    }
    setData(await response.json());
  }

  useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      console.error(error.message)
    }
  }, [endpoint, alert]);

  return data;
}
