import { SIGN_IN, SIGN_OUT } from './types';

export const setUser = (user) => {
  return {
    type: SIGN_IN,
    payload: user
  }
}

export const logout = () => {
  return {
    type: SIGN_OUT,
    payload: {}
  }
}
