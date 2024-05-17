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
                console.error('Error recovering Time movies :', error);
            }
        }
        fetchMovieRuntime(); // Utilisez fetchMovieRuntime ici
    }, [id]);

    return (
        <p className="tracking-wider text-white">{runtime} Minutes</p> // Utilisez runtime ici
    );
}

export default TimeMovie;
