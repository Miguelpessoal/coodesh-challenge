import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { createContext } from "react";
import { parseCookies, setCookie } from "nookies";
import { api } from "../utils/Api";
import { useNavigate } from "react-router";
import { useToast } from "@chakra-ui/react";

type SignInType = { email: string; password: string };

type UserType = {
  id: string | number;
  name: string;
  email: string;
  permissions: string[];
};

type AuthContextType = {
  isAuthenticated: boolean;
  ref: string;
  setRef: Function;
  user: UserType | null;
  signIn: (data: SignInType) => Promise<void>;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: any) {
  const [user, setUser] = useState<UserType | null>(null);
  const [ref, setRef] = useState<string>("");
  const navigate = useNavigate();

  const isAuthenticated = !!user;
  const toast = useToast();

  useEffect(() => {
    if (document) {
      setRef(document.location.href);
    }

    const { token: token } = parseCookies();

    if (!token) {
      return navigate("/login");
    }

    api.defaults.headers["Authorization"] = `bearer ${token}`;
    navigate("/home");
  }, []);

  const signIn = async (data: SignInType) => {
    api
      .post("login", {
        ...data,
      })
      .then(({ data }: AxiosResponse) => {
        const { token, user } = data;
        setCookie(undefined, "token", token, {
          maxAge: 30 * 24 * 60 * 60,
        });

        api.defaults.headers["Authorization"] = `bearer ${token}`;

        setUser(user);
        token && navigate("/home");
      })
      .catch(() => {
        return toast({
          title: "Erro ao fazer login.",
          status: "error",
          isClosable: true,
        });
      });
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, user, signIn, ref, setRef }}
    >
      {children}
    </AuthContext.Provider>
  );
}
