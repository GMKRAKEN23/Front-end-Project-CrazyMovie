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
        <div className="absolute flex items-center bg-black cursor-pointer bottom-4 right-12 w-14 h-7 rounded-xl">
            <i className='px-1 text-base text-white bx bxs-star'></i>
            <p className='font-bold text-white '>{voteAverage}</p>
        </div>
    );
}

export default Rating;

