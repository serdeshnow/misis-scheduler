import { createBrowserRouter } from 'react-router-dom';
import { AppLayout } from '@widgets/layout';
import { HomePage } from '@pages/home';
// import { AboutPage } from '@/pages/about';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <HomePage/>,
      }
    ]
  },
  // {
  //   path: '/',
  //   element: <LandingPage />,
  // },
  // {
  //   path: '/about',
  //   element: <AboutPage />,
  // },
]);
