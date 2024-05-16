export async function fetchTrendingMovies() {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${import.meta.env.VITE_API_KEY}`);
    if (response.ok) {
      const data = await response.json();
      return data.results;
    } else {
      console.error('Error while recovering trending movies');
      return [];
    }
  } catch (error) {
    console.error('Error while recovering trending movies:', error);
    return [];
  }
}
