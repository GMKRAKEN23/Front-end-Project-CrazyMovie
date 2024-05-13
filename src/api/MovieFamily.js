import { keyApi } from "./Key_api";

async function fetchFamilyMovies() {
    try {
        // Récupérer l'ID du genre "Famille"
        const genresResponse = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${keyApi}`);
        const genresData = await genresResponse.json();
        const familyGenre = genresData.genres.find(genre => genre.name === "Family");
        if (!familyGenre) {
            throw new Error('Le genre "Famille" n\'a pas été trouvé.');
        }

        // Recherche de films par genre "Famille"
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${keyApi}&with_genres=${familyGenre.id}`);
        if (!response.ok) {
            throw new Error('La requête API a échoué.');
        }
        const data = await response.json();
        
        // Filtrer les résultats pour inclure uniquement les films du genre "Famille"
        const familyMovies = data.results.filter(movie => {
            return movie.genre_ids.includes(familyGenre.id);
        });
        
        return familyMovies;
    } catch (error) {
        console.error('Erreur lors de la récupération des films de la famille :', error);
        throw error;
    }
}

export { fetchFamilyMovies };
