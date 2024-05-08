import { useState, useEffect } from 'react';
import NavBarBottom from './components/NavBarBottom/NavBarBottom'
import Logo from './components/Logo'
import Content from '../src/pages/Homepage/HomePage'
import './App.css'

function App() {
  const keyApi = '57131dfc3fa14e353286ee96079b63f4';
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchNowPlayingMovies() {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${keyApi}`);
        if (response.ok) {
          const data = await response.json();
          setMovies(data.results);
          console.log('Now playing movies:', data.results);  
        } else {
          console.error('Erreur lors de la récupération des films actuellement en cours de diffusion');
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des films actuellement en cours de diffusion:', error);
      }
    }

    fetchNowPlayingMovies();
  }, []); 

  return (
    <>
    <Logo />
    <Content movies={movies}/>
    <NavBarBottom/>
    </>
  )
}

export default App;
