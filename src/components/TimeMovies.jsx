import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieTime } from "../api/runTimeApi";

function TimeMovie() {
    const { id } = useParams(); 
    const [runtime, setRuntime] = useState(null);

    useEffect(() => {
        async function fetchMovieRuntime() { 
            try {
                const runtime = await fetchMovieTime(id);
                setRuntime(runtime);
            } catch (error) {
                console.error('Error recovering Time movies :', error);
            }
        }
        fetchMovieRuntime(); 
    }, [id]);

    return (
        <p className="tracking-wider text-white">{runtime} Minutes</p> 
    );
}

export default TimeMovie;
