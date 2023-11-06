import { useState, useEffect } from 'react';
import Cookie from 'js-cookie';
import endPoints from '@services/api';
import { useRouter } from 'next/navigation';

export default function useAuth() {
  const [user, setUser] = useState(null);
  const router = useRouter();

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

    Cookie.set('token', token, { expires: 20 });

    const data = await fetch(endPoints.auth.profile, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    const profile = await data.json();

    setUser(profile);
  };

  const logout = () => {
    Cookie.remove('token');
    setUser(null);
    router.push('/login');
  };

  useEffect(() => {
    async function getUser() {
      const token = Cookie.get('token');
      if (!token) {
        setUser(null);
        return;
      }
      const response = await fetch(endPoints.auth.profile, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        setUser(null);
        return;
      }
      setUser(await response.json());
    }

    getUser();
  }, []);

  return {
    user,
    signIn,
    logout,
  };
}
