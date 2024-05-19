import { createBrowserRouter } from "react-router-dom";
import App from './App';
import DetailsMovies from "./pages/DetailsMovie/DetailsMovie";
import HomePage from "./pages/Homepage/HomePage";
import WatchList from "./pages/Watchlist/WatchList";
import SearchMovie from "./pages/SearchMovie/SearchMovie";
import ContainerMovie from "./pages/SearchMovie/ContainerMovie";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Trending from "./components/Trending";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/homepage',
                element: <HomePage />
            },
            {
                path: '/trending',
                element: <Trending />,
            }
        ]
    },
    {
        path: `/detailsmovies/:id`,
        element: <DetailsMovies />,
        caseSensitive: true,
    },
    {
        path: '/watchlist',
        element: <WatchList />,
        caseSensitive: true,
    },
    {
        path: '/searchmovie',
        element: <SearchMovie />,
        caseSensitive: true,
        children: [
          {
            path: 'action',
            element: <ContainerMovie />,
            caseSensitive: true,
          },
          {
            path: 'comedy',
            element: <ContainerMovie />,
            caseSensitive: true,
          },
          {
            path: 'drama',
            element: <ContainerMovie />,
            caseSensitive: true,
          },
          {
            path: 'family',
            element: <ContainerMovie />,
            caseSensitive: true,
          },
          {
            path: 'fantasy',
            element: <ContainerMovie />,
            caseSensitive: true,
          },
          {
            path: 'horror',
            element: <ContainerMovie />,
            caseSensitive: true,
          },
          {
            path: 'sciencefiction',
            element: <ContainerMovie />,
            caseSensitive: true,
          }
        ]
      }
      
])
