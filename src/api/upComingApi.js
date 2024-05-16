export async function fetchUpComingMovies() {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${import.meta.env.VITE_API_KEY}`);
    if (response.ok) {
      const data = await response.json();
      return data.results;
    } else {
      console.error('Error while recovering upcoming movies');
      return [];
    }
  } catch (error) {
    console.error('Error while recovering upcoming movies:', error);
    return [];
  }
}