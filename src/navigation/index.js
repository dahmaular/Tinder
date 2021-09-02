/* eslint-disable prettier/prettier */
import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {AuthNav} from './auth-navigation';
import {MyTabs} from './app-navigation';

import {AuthenticationContext} from '../services/auth-context';

export const Navigation = () => {
  const {isAuthenticated} = useContext(AuthenticationContext);
  // const [user, setUser] = useState(null);

  // async function checkUser() {
  //   try {
  //     const data = await Auth.currentUserPoolUser();
  //     const userInfo = {username: data.username, ...data.attributes};
  //     setUser(userInfo);
  //     console.log(user);
  //   } catch (err) {
  //     console.log('error: ', err);
  //   }
  // }

  // useEffect(() => {
  //   checkUser();
  // }, []);

  return (
    <NavigationContainer>
      {isAuthenticated ? <MyTabs /> : <AuthNav />}
    </NavigationContainer>
  );
};
