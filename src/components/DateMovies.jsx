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
                console.error('Erreur lors de la récupération de la date de sortie du film :', error);
                setDate('Erreur lors de la récupération de la date de sortie');
            }
        }
        fetchReleaseDate();
    }, [id]);

    return (
        <p className="text-white">{date}</p>
    );
}

export default DateMovie;
