async function fetchMovieOverview(movieId) {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${import.meta.env.VITE_API_KEY}`);
        const data = await response.json();
        
        if (data.overview !== undefined) {
            const overviewLimit = 100;

            if (data.overview.length > overviewLimit) {
                return data.overview.substring(0, overviewLimit) + "...";
            } else {
                return data.overview;
            }
        } else {
            throw new Error("The titles are not present in the API response.");
        }
    } catch (error) {
        console.error('Error retrieving movie titles:', error);
        throw error;
    }
}

export { fetchMovieOverview };
