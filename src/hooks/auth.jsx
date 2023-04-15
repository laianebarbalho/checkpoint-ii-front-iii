import { createContext, useContext, useState } from "react";
import dFetch from "../axios/config";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function signIn({ username, password }) {
    try {
      const response = await dFetch.post("/auth", {
        username,
        password,
      });
      const { token } = response.data;
      setData({ token });
    } catch (error) {
      console.log("error", error);
    }
  }

  return (
    <AuthContext.Provider value={{ signIn, userToken: data.token }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
export { AuthProvider, useAuth };
