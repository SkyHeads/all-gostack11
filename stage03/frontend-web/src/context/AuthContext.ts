import { createContext } from 'react';

interface AuthContext {
  name: string;
}

const authContext = createContext();
