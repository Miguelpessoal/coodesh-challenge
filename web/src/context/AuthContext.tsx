import {
  useState,
  useContext,
  createContext,
  ReactNode,
  useCallback,
} from "react";

import { useToast, UseToastOptions } from "@chakra-ui/react";

import { api } from "../utils/Api";

interface AuthProps {
  children: ReactNode;
}

type AuthContextData = {
  isAuthenticated: boolean;
  user: Object;
  signIn: (_props: SignInProps) => Promise<void>;
  signOut(): Promise<void>;
};

type SignInProps = {
  email: string;
  password: string;
};

const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProps) {
  const toast = useToast();

  const [user, setUser] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAuthLoading, setIsAuthLoading] = useState(true);

  const signOut = useCallback(
    async (toastOptions?: UseToastOptions) => {
      setIsAuthenticated(false);
      setIsAuthLoading(false);

      setUser({});

      // force redirect to login

      toast({
        title: "Deslogado",
        description: "Você foi deslogado com sucesso.",
        status: "success",
        position: "top-right",
        duration: 4000,
        isClosable: true,
        ...toastOptions,
      });
    },
    [toast]
  );

  async function signIn(credentials: SignInProps) {
    try {
      const { data } = await api.post("login", {
        ...credentials,
      });

      api.defaults.headers.authorization = `Bearer ${data.token}`;

      setUser(data.user);
    } catch {}
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
