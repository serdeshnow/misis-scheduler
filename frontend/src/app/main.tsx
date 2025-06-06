import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@/shared/styles/main.scss';
import { RouterProvider } from 'react-router';
import { router } from './providers/router.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
