'use client';

import { useState, useEffect } from 'react';

export default function useFetch(endpoint) {
  const [data, setData] = useState([]);

  async function fetchData() {
    const response = await fetch(endpoint);
    const data = await response.json();
    setData(data);
  }

  useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      console.error(error);
    }
  }, [endpoint]);

  return data;
}
