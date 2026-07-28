import { AUTH_TYPES } from "./authTypes";
import { storage } from "../utils/storage";

export const initializeAuth = (dispatch) => {
  const token = storage.getToken();
  const user = storage.getUser();

  dispatch({
    type: AUTH_TYPES.INITIALIZE,
    payload: {
      isAuthenticated: !!token,
      token,
      user,
    },
  });
};

export const loginUser = (dispatch, data) => {
  storage.setToken(data.token);
  storage.setUser(data.user);

  dispatch({
    type: AUTH_TYPES.LOGIN,
    payload: {
      token: data.token,
      user: data.user,
    },
  });
};

export const logoutUser = (dispatch) => {
  storage.clear();

  dispatch({
    type: AUTH_TYPES.LOGOUT,
  });
};