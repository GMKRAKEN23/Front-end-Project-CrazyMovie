import { keyApi } from "./Key_api";

async function fetchImageMovie(movieId) {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${keyApi}`);
        const data = await response.json();
        
        if (data.poster_path !== undefined) {
            return data.poster_path;
        } else {
            throw new Error("La propriété poster_path n'est pas présente dans la réponse de l'API.");
        }
    } catch (error) {
        console.error('Erreur lors de la récupération de l\'image du film :', error);
        throw error;
    }
}

export { fetchImageMovie };
