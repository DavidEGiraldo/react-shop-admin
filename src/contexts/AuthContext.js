'use client';

import { createContext } from 'react';

import useAuth from '@hooks/useAuth';

const AuthContext = createContext();

function ProviderAuth({ children }) {
  const auth = useAuth();

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export { AuthContext, ProviderAuth };
