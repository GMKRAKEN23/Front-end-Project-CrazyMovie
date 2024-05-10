import { keyApi } from "./Key_api";

async function fetchMovieRatings(movieId) {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${keyApi}`);
        const data = await response.json();
        
        if (data.vote_average !== undefined) {
            return data.vote_average;
        } else {
            throw new Error("La propriété vote_average n'est pas présente dans la réponse de l'API.");
        }
    } catch (error) {
        console.error('Erreur lors de la récupération des notes des films :', error);
        throw error;
    }
}

export { fetchMovieRatings };
