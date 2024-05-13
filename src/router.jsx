import { createBrowserRouter } from "react-router-dom"
import App from './App'
import DetailsMovies from "./pages/DetailsMovie/DetailsMovie"
import HomePage from "./pages/Homepage/HomePage"
import WatchList from "./pages/Watchlist/WatchList"
import SearchMovie from "./pages/SearchMovie/SearchMovie"

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children:[
            {
                path: '/homepage',
            element: <HomePage />
            } 
        ]
    },
    {
        path: '/detailsmovies/:id',
        element: <DetailsMovies />,
        caseSensitive: true,
    },
    {
        path:'/watchlist',
        element: <WatchList/>,
        caseSensitive: true,
    },
    {
        path:'/searchmovie',
        element: <SearchMovie/>,
        caseSensitive: true,
    },
])
