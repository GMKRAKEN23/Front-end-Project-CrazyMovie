import { createBrowserRouter } from "react-router-dom"
import App from './App'
import DetailsMovies from "./pages/DetailsMovie/detailsMovie"
import HomePage from "./pages/Homepage/HomePage"

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
    }
])
