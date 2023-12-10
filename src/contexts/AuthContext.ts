import { createContext } from "react";
import { User } from "@/types/User";

type AuthContextType = {
  user: User | null;
  setUser: (user: User | null) => void;
  isLoggedIn: boolean;
};

export const AuthContext = createContext({
  user: null,
  setUser: (user: User | null) => {},
  isLoggedIn: false,
} as AuthContextType);
