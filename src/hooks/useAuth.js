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
    const { access_token: token } = await response.json();

    if (!token) {
      throw new Error('Invalid Username or Password');
    }

    Cookie.set('token', token, { expires: 5 });

    const data = await fetch(endPoints.auth.profile, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    const profile = await data.json();

    setUser(profile);
  };

  return {
    user,
    signIn,
  };
}
