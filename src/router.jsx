import { createBrowserRouter } from "react-router-dom"
import App from './App'
import DetailsMovies from "./pages/DetailsMovie/DetailsMovie"
import HomePage from "./pages/Homepage/HomePage"
import WatchList from "./pages/Watchlist/WatchList"
import SearchMovie from "./pages/SearchMovie/SearchMovie"
import ContainerMovie from "./pages/SearchMovie/ContainerMovie"
import ErrorPage from "./pages/ErrorPage/ErrorPage"

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/homepage',
                element: <HomePage />
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
    },
    {
        path: '/searchmovie/action',
        element: <ContainerMovie />,
        caseSensitive: true,
    },
    {
        path: '/searchmovie/comedy',
        element: <ContainerMovie />,
        caseSensitive: true,
    },
    {
        path: '/searchmovie/drama',
        element: <ContainerMovie />,
        caseSensitive: true,
    },
    {
        path: '/searchmovie/family',
        element: <ContainerMovie />,
        caseSensitive: true,
    },
    {
        path: '/searchmovie/fantasy',
        element: <ContainerMovie />,
        caseSensitive: true,
    },
    {
        path: '/searchmovie/horror',
        element: <ContainerMovie />,
        caseSensitive: true,
    },
    {
        path: '/searchmovie/sciencefiction',
        element: <ContainerMovie />,
        caseSensitive: true,
    }
])
