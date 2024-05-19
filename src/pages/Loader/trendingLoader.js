import { fetchTrendingMovies } from '../../api/trendingApi'; 

export async function trendingLoader() {
  try {
    const movies = await fetchTrendingMovies();
    return { movies };
  } catch (error) {
    console.error('Error while recovering trending movies:', error);
    throw error;
  }
}