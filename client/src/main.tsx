import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './routes/AppRouter.tsx';
import { RouterProvider } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <AuthProvider>
      <RouterProvider router={AppRouter} /> 
      </AuthProvider>
    </React.StrictMode>,
)
