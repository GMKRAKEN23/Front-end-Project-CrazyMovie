import { keyApi } from "./Key_api";

async function fetchMovieOverview(movieId) {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${keyApi}`);
        const data = await response.json();
        
        if (data.overview !== undefined) {
            const overviewLimit = 100;

            if (data.overview.length > overviewLimit) {
                return data.overview.substring(0, overviewLimit) + "...";
            } else {
                return data.overview;
            }
        } else {
            throw new Error("La propriété title n'est pas présente dans la réponse de l'API.");
        }
    } catch (error) {
        console.error('Erreur lors de la récupération des titres des films :', error);
        throw error;
    }
}

export { fetchMovieOverview };
