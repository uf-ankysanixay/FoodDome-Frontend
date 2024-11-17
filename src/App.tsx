// src/App.tsx

import { useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import KTComponent from './assets/core/index';
import AppRoutes from './routes/AppRoutes';
import config from './helpers/config';

function App() {
  useEffect(() => {
    KTComponent.init();
  }, []);

  const router = createBrowserRouter(AppRoutes, {
    future: {
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  });

  // Optionally log environment info (for debugging purposes)
  console.log('API URL:', config.apiUrl);
  console.log('Web URL:', config.webUrl);
  console.log('Environment:', config.environment);

  return <RouterProvider future={{ v7_startTransition: true }} router={router} />;
}

export default App;
