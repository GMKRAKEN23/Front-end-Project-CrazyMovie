export async function fetchPopularMovies() {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_API_KEY}`);
    if (response.ok) {
      const data = await response.json();
      return data.results;
    } else {
      console.error('Error recovering popular movies');
      return [];
    }
  } catch (error) {
    console.error('Error recovering popular movies:', error);
    return [];
  }
}
