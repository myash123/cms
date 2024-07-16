import React, { createContext, useReducer } from 'react';
import AuthContainer from './components/AuthContainer';

type AuthContextType = {
  user: string | null;
  hasLoginError: boolean;
  login: (username: string, password: string) => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType>({
  user: null,
  hasLoginError: false,
  login: () => {},
  logout: () => {}
});

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'login': {
      const { username, password } = action.payload;
      if (username != null && password != null) {
        return {
          ...state,
          hasLoginError: false,
          user: username, 
        };
      }
      return {
        ...state,
        hasLoginError: true,
        user: null,
      };
    }
    case 'logout': {
      return {
        ...state,
        user: null,
      };
    }
    default: 
      throw new Error('Invalid action type');
  }
};

function App() {
  const INITIAL_STATE = {
    user: null,
    hasLoginError: false,
  };

  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const login = (username: string, password: string) => {
    dispatch({ type: 'login', payload: { username, password }});
  };
  
  const logout = () => {
    dispatch({ type: 'logout' });
  };

  const value = {
    user: state.user,
    hasLoginError: state.hasLoginError,
    login,
    logout,
  };
  
  return (
    <>
      <AuthContext.Provider value={value}>
        {!value.user && <AuthContainer />}
        {value.user && <div>`This is a secret div ${JSON.stringify(value.user)}`</div>}
      </AuthContext.Provider>
    </>
  );
}

export default App;
