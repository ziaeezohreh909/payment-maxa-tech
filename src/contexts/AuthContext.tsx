import { ReactNode, createContext, useState } from "react";
import { UserDataType } from "./types";

interface AuthContextType {
  loggedInUser: UserDataType | undefined;
  handleLogin: (obj: UserDataType | undefined) => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

type AuthContextProviderProps = {
  children: ReactNode;
};

export default function AuthContextProvider({
  children,
}: AuthContextProviderProps) {
  const [loggedInUser, setLoggedInUser] = useState<UserDataType | undefined>(
    undefined
  );

  const handleLogin = (obj: UserDataType | undefined) => {
    setLoggedInUser(obj);
  };

  return (
    <AuthContext.Provider value={{ loggedInUser, handleLogin }}>
      {children}
    </AuthContext.Provider>
  );
}
