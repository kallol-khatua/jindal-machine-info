import {
  createContext,
  useContext,
  useEffect,
  useReducer,
} from "react";

import AuthReducer, {
  initialState,
} from "./AuthReducer";

import {
  initializeAuth,
  loginUser,
  logoutUser,
} from "./AuthActions";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(
    AuthReducer,
    initialState
  );

  useEffect(() => {
    initializeAuth(dispatch);
  }, []);

  const login = (data) => {
    loginUser(dispatch, data);
  };

  const logout = () => {
    logoutUser(dispatch);
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}