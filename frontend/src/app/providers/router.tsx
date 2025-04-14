import { createBrowserRouter } from 'react-router-dom';
import { AppLayout } from '@widgets/layout';
import { HomePage } from '@pages/home';
import { Bot } from '@features/bot';
import { AddSchedulePage } from '@pages/add-schedule';
// import { AboutPage } from '@/pages/about';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/sber',
        element: <Bot />,
      },
      {
        path: '/add-schedule',
        element: <AddSchedulePage />,
      },
    ],
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
