import { keyApi } from "./Key_api";

async function fetchMovieTime(movieId) {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${keyApi}`);
        const data = await response.json();
        
        if (data.runtime!== undefined) {
            return data.runtime;
        } else {
            throw new Error("La propriété durée n'est pas présente dans la réponse de l'API.");
        }
    } catch (error) {
        console.error('Erreur lors de la récupération des durées des films :', error);
        throw error;
    }
}

export { fetchMovieTime };
