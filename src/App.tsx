// src/App.tsx

import { useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import KTComponent from './assets/core/index';
import AppRoutes from './routes/AppRoutes';

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
      v7_skipActionErrorRevalidation: true
    },
  });

  return <RouterProvider
    future={{
      v7_startTransition: true
    }}
    router={router}
  />;
}

export default App;