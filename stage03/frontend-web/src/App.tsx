import React from 'react';

import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';
import ToastContainer from './components/ToastContainer';

import { AuthProvider } from './hooks/auth';

import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <AuthProvider>
        <SignIn />
      </AuthProvider>

      <ToastContainer />
      <GlobalStyle />
    </>
  );
};

export default App;
