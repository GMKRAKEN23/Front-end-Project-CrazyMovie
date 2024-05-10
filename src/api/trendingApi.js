import { keyApi } from "./Key_api";

export async function fetchTrendingMovies() {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${keyApi}`);
    if (response.ok) {
      const data = await response.json();
      return data.results;
    } else {
      console.error('Erreur lors de la récupération des films trending');
      return [];
    }
  } catch (error) {
    console.error('Erreur lors de la récupération des films trending:', error);
    return [];
  }
}
