import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDate } from '../api/dateMovieApi'; 

function DateMovie() {
    const { id } = useParams(); 
    const [date, setDate] = useState(null);

    useEffect(() => {
        async function fetchReleaseDate() {
            try {
                const releaseDate = await fetchMovieDate(id);
                setDate(releaseDate);
            } catch (error) {
                console.error('Error recovering Date movies:', error);
            }
        }
        fetchReleaseDate();
    }, [id]);

    return (
        <p className="tracking-wider text-white">{date} |</p>
    );
}

export default DateMovie;
