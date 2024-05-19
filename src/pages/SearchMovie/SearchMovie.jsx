import { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import SearchBar from "./SearchBar";
import ActionGenre from "../../components/MoviesGenre/components/ActionGenre";
import ComedyGenre from "../../components/MoviesGenre/components/ComedyGenre";
import DramaGenre from "../../components/MoviesGenre/components/DramaGenre";
import FamilyGenre from "../../components/MoviesGenre/components/FamilyGenre";
import FantasyGenre from "../../components/MoviesGenre/components/FantasyGenre";
import HorrorGenre from "../../components/MoviesGenre/components/HorrorGenre";
import ScienceFictionGenre from "../../components/MoviesGenre/components/ScienceFictionGenre";
import NavBarBottom from "../../../src/components/NavBarBottom/NavBarBottom";
import ContainerGenre from "../../components/MoviesGenre/ContainerGenre"; 

function SearchMovie() {
    const location = useLocation();
    const [movieResults, setMovieResults] = useState([]);

    useEffect(() => {
        setMovieResults([]);
    }, []);

    const renderGenre = () => {
        switch (location.pathname) {
            case '/searchmovie/action':
                return <ActionGenre enableSwiper={false} />;
            case '/searchmovie/comedy':
                return <ComedyGenre useSwiper={false} />;
            case '/searchmovie/drama':
                return <DramaGenre useSwiper={false} />;
            case '/searchmovie/family':
                return <FamilyGenre useSwiper={false} />;
            case '/searchmovie/fantasy':
                return <FantasyGenre useSwiper={false} />;
            case '/searchmovie/horror':
                return <HorrorGenre useSwiper={false} />;
            case '/searchmovie/sciencefiction':
                return <ScienceFictionGenre useSwiper={false} />;
            default:
                return null;
        }
    };

    return (
        <div>
            <SearchBar setMovieResults={setMovieResults} movieResults={movieResults} />
            {movieResults.length === 0 && !['/searchmovie/action', '/searchmovie/comedy', '/searchmovie/drama', '/searchmovie/family', '/searchmovie/fantasy', '/searchmovie/horror', '/searchmovie/sciencefiction'].includes(location.pathname) && <ContainerGenre />} 
            {renderGenre()}
            <NavBarBottom />
        </div>
    );
}

export default SearchMovie;
