/* eslint-disable prettier/prettier */
import React, {createContext, useState, useEffect} from 'react';
import {Auth} from 'aws-amplify';

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({children}) => {
  const [useR, setUseR] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function checkAuth() {
    try {
      const data = await Auth.currentUserPoolUser();
      const userInfo = {username: data.username, ...data.attributes};
      setUseR(userInfo);
      setIsLoading(false);
    } catch (error) {
      console.log('Authentication error', error);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    checkAuth();
  }, []);

  const onRegister = async data => {
    setIsLoading(true);
    try {
      const {user} = await Auth.signUp({
        username: data.username,
        password: data.password,
        attributes: {
          email: data.email,
        },
      });
      setUseR(user);
      setIsLoading(false);
      console.log('user Register data', user);
    } catch (error) {
      //   console.log('error signing up', error);
      setIsLoading(false);
      setError(error.message);
    }
  };

  const confirmSignUp = async (username, code) => {
    setIsLoading(true);
    try {
      await Auth.confirmSignUp(username, code);
      setIsLoading(false);
    } catch (error) {
      console.log('error confirming sign up', error);
      setIsLoading(false);
      setError(error.message);
    }
  };

  const onLogin = async (username, password) => {
    setIsLoading(true);
    try {
      const usr = await Auth.signIn(username, password);
      const userInfo = {username: usr.username, ...usr.attributes};
      setUseR(userInfo);
      setIsLoading(false);
    } catch (error) {
      console.log('error login', error.message);
      setIsLoading(false);
      setError(error.message);
    }
  };

  const onLogout = async () => {
    try {
      await Auth.signOut();
      setUseR(null);
    } catch (error) {
      console.log('error signing out: ', error);
    }
  };

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!useR,
        useR,
        error,
        isLoading,
        onRegister,
        confirmSignUp,
        onLogin,
        onLogout,
      }}>
      {children}
    </AuthenticationContext.Provider>
  );
};
