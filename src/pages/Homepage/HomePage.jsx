import ListMovies from "../../components/ListMovies";
import Trending from "../../components/Trending";

function Content({movies}){
    return (
        <>        
        <Trending movies={movies}/>
        <ListMovies movies={movies}/>
        </>
    )
        

}

export default Content;