import React, {
  createContext, FC, useContext, useEffect, useState,
} from 'react';
import {authSignIn, authSignUp} from "../api/auth_requests/ayth-requests";
import {useRouter} from "next/router";
import {AuthDTO} from "../api/auth_requests/authDTO";

interface Auth {
  user: AuthDTO | null;
  onLogin: (user: AuthDTO) => null;
  onSignUp: (user: AuthDTO) => null;
  onLogOut: () => null;
  setData: (user) => null,

}

// @ts-ignore
const AuthContext = createContext<Auth>({
  user: null,
  onLogin: (user: AuthDTO) => null,
  onSignUp: (user: AuthDTO) => null,
  onLogOut: () => null,
  setData: (user) => null,

 });

const AuthProvider: FC = ({ children }): JSX.Element => {
  const [user, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
  }, []);

  if (isLoading) {
    return;
  }

  const storeUser = (response, userCred) => {
      setData(JSON.stringify(response.data));
      localStorage.setItem('token', JSON.stringify(response.data));
      localStorage.setItem('passForRemember :)', `${JSON.stringify(userCred)}`)
      setIsLoading(false);
      router.push('/account')
  }

 async function onLogin(userCred) {
    const response = await authSignIn(userCred);
     storeUser(response, userCred);
  }

    async function onSignUp(userCred) {
        const response = await authSignUp(userCred);
        storeUser(response, userCred);
    }

  function onLogOut() {
    localStorage.removeItem('token');
    setData(null);
    router.push('/login');
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        // @ts-ignore                  
        setData,
        // @ts-ignore                  
        onLogin,
        // @ts-ignore                 
        onLogOut,
        // @ts-ignore                  
        onSignUp,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): Auth => useContext(AuthContext);

export default AuthProvider;
