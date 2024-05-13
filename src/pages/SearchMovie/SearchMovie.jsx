import ContainerGenre from '../../components/MoviesGenre/ContainerGenre';
import NavBarBottom from '../../components/NavBarBottom/NavBarBottom';
import SearchBar from '../../pages/SearchMovie/SearchBar';

function SearchMovie(){
    return (
        <div>
            <SearchBar />
            <ContainerGenre />
            <NavBarBottom />
        </div>
    )
}

export default SearchMovie;