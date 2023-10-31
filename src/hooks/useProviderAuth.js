import { useContext } from 'react';
import { AuthContext } from '@contexts/AuthContext';

export const useProviderAuth = () => {
  return useContext(AuthContext);
};
