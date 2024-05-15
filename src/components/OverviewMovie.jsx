import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieOverview} from '../api/overviewApi'; 

function OverviewMovie() {
    const { id } = useParams(); 
    const [overview, setOverview] = useState(null);

    useEffect(() => {
        async function fetchTitleMovie() {
            try {
                const overview = await fetchMovieOverview(id);
                setOverview(overview);
            } catch (error) {
                console.error('Erreur lors de la récupération de la note du film :', error);
                setOverview('Erreur lors de la récupération de la note');
            }
        }
        fetchTitleMovie();
    }, [id]);

    return (
        <div className="pl-5">
            <h2 className="w-24 mx-auto text-lg text-center bg-orange-600 rounded-lg">Overview</h2>
            <p className="mx-5 my-4 text-lg text-center text-white">{overview}</p>
        </div>
        
    );
}

export default  OverviewMovie;
