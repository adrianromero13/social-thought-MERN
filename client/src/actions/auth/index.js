import { AUTH_USER } from '../type';

export const signOut = () => {
  localStorage.removeItem('token');
  return {
    type: AUTH_USER,
    payload: '',
  };
};
