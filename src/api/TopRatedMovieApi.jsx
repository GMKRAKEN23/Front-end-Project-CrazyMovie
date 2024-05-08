import { keyApi } from "./Key_api";

export async function fetchTopRatedMovies() {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${keyApi}`);
    if (response.ok) {
      const data = await response.json();
      return data.results;
    } else {
      console.error('Error retrieving top rated movies');
      return [];
    }
  } catch (error) {
    console.error('Error retrieving top rated movies:', error);
    return [];
  }
}
