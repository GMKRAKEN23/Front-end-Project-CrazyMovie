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
                console.error('Error recovering Title movies', error);
            }
        }
        fetchTitleMovie();
    }, [id]);

    return (
        <p className="my-4 text-lg font-bold text-center text-white">{title}</p>
    );
}

export default TitleMovie;

