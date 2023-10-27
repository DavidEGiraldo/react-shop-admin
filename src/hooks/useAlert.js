import { useState } from 'react';

export default function useAlert(options) {
  const defaultOptions = {
    active: false,
    title: '',
    message: '',
    type: '',
    autoClose: true,
  };

  const [alert, setAlert] = useState({
    ...defaultOptions,
    ...options,
  });

  const toggleAlert = () => {
    setAlert(!alert.active);
  };

  return {
    alert,
    setAlert,
    toggleAlert,
  };
}
