import { keyApi } from "./Key_api";

async function fetchMovieTitle(movieId) {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${keyApi}`);
        const data = await response.json();
        
        if (data.title !== undefined) {
            return data.title;
        } else {
            throw new Error("La propriété title n'est pas présente dans la réponse de l'API.");
        }
    } catch (error) {
        console.error('Erreur lors de la récupération des titres des films :', error);
        throw error;
    }
}

export { fetchMovieTitle };
