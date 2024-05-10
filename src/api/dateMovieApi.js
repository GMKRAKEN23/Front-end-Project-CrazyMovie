import { keyApi } from "./Key_api";

async function fetchMovieDate(movieId) {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${keyApi}`);
        const data = await response.json();
        
        if (data.release_date !== undefined) {

            const releaseYear = new Date(data.release_date).getFullYear();
            return releaseYear.toString();
        } else {
            throw new Error("La propriété date de sortie n'est pas présente dans la réponse de l'API.");
        }
    } catch (error) {
        console.error('Erreur lors de la récupération des dates de sortie des films :', error);
        throw error;
    }
}

export { fetchMovieDate };
