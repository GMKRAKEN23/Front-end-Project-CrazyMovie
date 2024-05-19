import { createBrowserRouter } from "react-router-dom";
import App from './App';
import DetailsMovies from "./pages/DetailsMovie/DetailsMovie";
import HomePage from "./pages/Homepage/HomePage";
import WatchList from "./pages/Watchlist/WatchList";
import SearchMovie from "./pages/SearchMovie/SearchMovie";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Trending from "./components/Trending";
import { trendingLoader } from "./pages/Loader/trendingLoader";


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
                loader: trendingLoader,
            }
        ],  
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
            element: <SearchMovie/>,
            caseSensitive: true,
          },
          {
            path: 'comedy',
            element: <SearchMovie/>,
            caseSensitive: true,
          },
          {
            path: 'drama',
            element: <SearchMovie/>,
            caseSensitive: true,
          },
          {
            path: 'family',
            element: <SearchMovie/>,
            caseSensitive: true,
          },
          {
            path: 'fantasy',
            element: <SearchMovie/>,
            caseSensitive: true,
          },
          {
            path: 'horror',
            element: <SearchMovie/>,
            caseSensitive: true,
          },
          {
            path: 'sciencefiction',
            element: <SearchMovie/>,
            caseSensitive: true,
          }
        ]
      } 
])
