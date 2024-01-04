import { useContext } from "react";
import { AuthContext } from "@/contexts/AuthContext";
import { httpClient } from "@/lib/httpClient";
import { useMutation } from "@tanstack/react-query";
import Cookies from "js-cookie";

export function useSignOut() {
  const { setUser } = useContext(AuthContext);
  return useMutation({
    mutationFn: async () => {
      await httpClient.post("/auth/logout");
      Cookies.remove("token");
      Cookies.remove("username");
      setUser(null);
      delete httpClient.defaults.headers.common.Authorization;
    },
  });
}
