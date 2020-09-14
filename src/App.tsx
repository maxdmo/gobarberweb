import React from 'react';

import SignIn from './pages/Signin';
import SignUp from './pages/Signup';
import GlobalStyle from './styles/global';

import AppProvider from './hooks';

const App: React.FC = () => {
  return (
    <>
      <AppProvider>
          <SignIn></SignIn>
      </AppProvider>

      <GlobalStyle></GlobalStyle>
    </>
  );
};

export default App;
