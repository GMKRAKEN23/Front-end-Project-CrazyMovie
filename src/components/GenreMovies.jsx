import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieGenre} from '../api/genreMovieApi'; 

function GenreMovie() {
    const { id } = useParams(); 
    const [genre, setGenre] = useState(null);

    useEffect(() => {
        async function fetchGenreMovie() {
            try {
                const genre = await fetchMovieGenre(id);
                setGenre(genre);
            } catch (error) {
                console.error('Error recovering Genre movies:', error);
            }
        }
        fetchGenreMovie();
    }, [id]);

    return (
        <p className="px-2 tracking-wider text-white">{genre} |</p>
    );
}

export default GenreMovie;
