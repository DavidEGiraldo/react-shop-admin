'use client';

import { useState, useEffect } from 'react';

export default function useFetch(endpoint, alert = false) {
  const [data, setData] = useState([]);

  async function fetchData() {
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(`${response.status} - ${response.statusText}`);
    }
    const data = await response.json();
    setData(data);
  }

  useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      return error.message;
    }
  }, [endpoint, alert]);

  return data;
}
