import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieTitle} from '../api/titleApi'; 

function TitleMovie() {
    const { id } = useParams(); 
    const [title, setTitle] = useState(null);

    useEffect(() => {
        async function fetchTitleMovie() {
            try {
                const title = await fetchMovieTitle(id);
                setTitle(title);
            } catch (error) {
                console.error('Erreur lors de la récupération de la note du film :', error);
                setTitle('Erreur lors de la récupération de la note');
            }
        }
        fetchTitleMovie();
    }, [id]);

    return (
        <p className="text-white">{title}</p>
    );
}

export default TitleMovie;

