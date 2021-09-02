import 'react-native-gesture-handler';
import React from 'react';
import Amplify from 'aws-amplify';

import {AuthenticationContextProvider} from './src/services/auth-context';

import config from './src/aws-exports';

import {Navigation} from './src/navigation';

Amplify.configure(config);

const App = () => {
  return (
    <AuthenticationContextProvider>
      <Navigation />
    </AuthenticationContextProvider>
  );
};

export default App;
