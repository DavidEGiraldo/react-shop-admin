import { useState } from 'react';
import Cookie from 'js-cookie';

export default function useAuth() {
  const [user, setUser] = useState(null);

  const signIn = async (email, password) => {
    setUser('login');
  };

  return {
    user,
    signIn,
  };
}
