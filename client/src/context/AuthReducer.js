import { AUTH_TYPES } from "./authTypes";

export const initialState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null,
  token: null,
};

export default function AuthReducer(state, action) {
  switch (action.type) {
    case AUTH_TYPES.INITIALIZE:
      return {
        ...state,
        isInitialized: true,
        isAuthenticated: action.payload.isAuthenticated,
        user: action.payload.user,
        token: action.payload.token,
      };

    case AUTH_TYPES.LOGIN:
      return {
        ...state,
        isInitialized: true,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token,
      };

    case AUTH_TYPES.LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        token: null,
      };

    default:
      return state;
  }
}