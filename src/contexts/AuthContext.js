'use client'

import { useContext, createContext } from "react";

import useAuth from "@hooks/useAuth";

const AuthContext = createContext()


export function ProviderAuth({ children }) {
  const auth = useAuth()
  
  return (
    <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
  )
}

export const useProvideAuth = () => {
  return useContext(AuthContext)
}