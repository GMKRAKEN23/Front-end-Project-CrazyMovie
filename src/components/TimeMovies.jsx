import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieTime } from "../api/runTimeApi";

function TimeMovie() {
    const { id } = useParams(); 
    const [runtime, setRuntime] = useState(null); // Utilisez runtime plutôt que time

    useEffect(() => {
        async function fetchMovieRuntime() { // Renommez la fonction pour éviter la confusion
            try {
                const runtime = await fetchMovieTime(id);
                setRuntime(runtime);
            } catch (error) {
                console.error('Erreur lors de la récupération de la durée du film :', error);
                setRuntime('Erreur lors de la récupération de la durée du film');
            }
        }
        fetchMovieRuntime(); // Utilisez fetchMovieRuntime ici
    }, [id]);

    return (
        <p className="text-white tracking-wider">{runtime} Minutes</p> // Utilisez runtime ici
    );
}

export default TimeMovie;
