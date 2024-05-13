import { keyApi } from "./Key_api";

async function fetchScienceFictionMovies() {
    try {
        const genresResponse = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${keyApi}`);
        const genresData = await genresResponse.json();
        const scienceFictionGenre = genresData.genres.find(genre => genre.name === "Science Fiction");
        if (!scienceFictionGenre) {
            throw new Error('Le genre Action n\'a pas été trouvé.');
        }
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${keyApi}&with_genres=${scienceFictionGenre.id}`);
        if (!response.ok) {
            throw new Error('La requête API a échoué.');
        }
        const data = await response.json();
        const scienceFictionMovies = data.results.filter(movie => {
            return movie.genre_ids.includes(scienceFictionGenre.id);
        });
        return scienceFictionMovies;
    } catch (error) {
        console.error('Erreur lors de la récupération des films d\'action :', error);
        throw error;
    }
}

export { fetchScienceFictionMovies };