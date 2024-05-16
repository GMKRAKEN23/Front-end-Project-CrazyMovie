async function fetchImageMovie(movieId) {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${import.meta.env.VITE_API_KEY}`);
        const data = await response.json();
        
        if (data.poster_path !== undefined) {
            return data.poster_path;
        } else {
            throw new Error("Images are not present in the API response.");
        }
    } catch (error) {
        console.error('Error retrieving movie images:', error);
        throw error;
    }
}

export { fetchImageMovie };
