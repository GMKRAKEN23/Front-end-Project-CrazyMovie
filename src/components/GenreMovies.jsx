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
                console.error('Erreur lors de la récupération de la note du film :', error);
                setGenre('Erreur lors de la récupération de la note');
            }
        }
        fetchGenreMovie();
    }, [id]);

    return (
        <p className="px-2 tracking-wider text-white">{genre} |</p>
    );
}

export default GenreMovie;
