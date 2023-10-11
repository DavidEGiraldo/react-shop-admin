import { useState } from 'react';
import Cookie from 'js-cookie';
import endPoints from '@services/api';

export default function useAuth() {
  const [user, setUser] = useState(null);

  const signIn = async (email, password) => {
    const response = await fetch(endPoints.auth.login, {
      method: 'POST',
      headers: {
        accept: '*/*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    const { access_token } = await response.json();
    console.log(access_token);
  };

  return {
    user,
    signIn,
  };
}
