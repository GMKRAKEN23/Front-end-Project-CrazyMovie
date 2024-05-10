import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieRatings } from '../api/ratedApi.js'; 

function Rating() {
    const { id } = useParams(); 
    const [voteAverage, setVoteAverage] = useState(null);

    useEffect(() => {
        async function fetchVoteAverage() {
            try {
                const average = await fetchMovieRatings(id);
                const formattedAverage = average.toFixed(1);
                setVoteAverage(formattedAverage);
            } catch (error) {
                console.error('Erreur lors de la récupération de la note du film :', error);
                setVoteAverage('Erreur lors de la récupération de la note');
            }
        }
        fetchVoteAverage();
    }, [id]);

    return (
        <div className="cursor-pointer flex items-center w-14 h-7 bg-lime-600 rounded-xl">
            <i className='bx bxs-star text-base text-orange-600 px-1'></i>
            <p className='text-orange-600 font-bold'>{voteAverage}</p>
        </div>
    );
}

export default Rating;

