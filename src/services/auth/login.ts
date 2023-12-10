import { useContext } from "react";
import { AuthContext } from "@/contexts/AuthContext";
import { httpClient } from "@/lib/httpClient";
import { BaseResponse } from "@/types/BaseResponse";
import { User } from "@/types/User";
import { useMutation } from "@tanstack/react-query";
import Cookies from "js-cookie";

export type SignInRequest = {
  email: string;
  password: string;
};

export function useSignIn(data: SignInRequest) {
  const { setUser } = useContext(AuthContext);
  const formData = new FormData();
  formData.append("email", data.email);
  formData.append("password", data.password);

  return useMutation({
    mutationFn: async () => {
      const { data } = await httpClient.post<BaseResponse<User>>("/auth/login", formData);
      if (data.data === undefined || data.token === undefined) return;
      setUser(data.data);
      httpClient.defaults.headers.common.Authorization = `Bearer ${data.token}`;
      Cookies.set("token", data.token, { expires: 7 });
      Cookies.set("username", data.data.name, { expires: 7 });
    },
  });
}
