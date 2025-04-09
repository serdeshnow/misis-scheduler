import { createBrowserRouter } from 'react-router-dom';
import { AppLayout } from '@widgets/layout';
import { HomePage } from '@pages/home';
import {Bot} from "@features/bot/ui/Bot.tsx";
// import { AboutPage } from '@/pages/about';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <HomePage/>,
      },
      {
        path: '/sber',
        element: <Bot/>
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
