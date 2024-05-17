async function fetchMovieDate(movieId) {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${import.meta.env.VITE_API_KEY}`);
        const data = await response.json();
        
        if (data.release_date !== undefined) {

            const releaseYear = new Date(data.release_date).getFullYear();
            return releaseYear.toString();
        } else {
            throw new Error("The release date is not present in the API response.");
        }
    } catch (error) {
        console.error('Error retrieving movie release dates:', error);
        throw error;
    }
}

export { fetchMovieDate };
