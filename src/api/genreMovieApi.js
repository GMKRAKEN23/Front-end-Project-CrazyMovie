import { keyApi } from "./Key_api";

async function fetchMovieGenre(movieId) {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${keyApi}`);
        const data = await response.json();
        
        if (data.genres && Array.isArray(data.genres) && data.genres.length > 0) {

            const maxGenres = data.genres.slice(0, 2);
            const genreNames = maxGenres.map(genre => genre.name);

            return genreNames.join(', ');
            
        } else {
            throw new Error("Aucun genre trouvé dans la réponse de l'API ou genres est null.");
        }
    } catch (error) {
        console.error('Erreur lors de la récupération des genres des films :', error);
        throw error;
    }
}

export { fetchMovieGenre };
