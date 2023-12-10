"use client";

import React from "react";
import { AuthContext } from "@/contexts/AuthContext";
import { User } from "@/types/User";

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = React.useState<User | null>(null);

  return (
    <AuthContext.Provider
      value={{
        user: user,
        setUser: setUser,
        isLoggedIn: false,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
export default AuthProvider;
