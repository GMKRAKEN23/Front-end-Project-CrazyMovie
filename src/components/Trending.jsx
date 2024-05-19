import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from '../api/trendingApi'; 
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import { Link, useLocation } from 'react-router-dom'; // Importez useLocation
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import Spinner from './Spinner'; // Importez votre composant Spinner

function Trending() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation(); // Utilisez useLocation pour obtenir le pathname actuel

  useEffect(() => {
    async function fetchData() {
      try {
        const movies = await fetchTrendingMovies();
        setTrendingMovies(movies);
        setLoading(false);
      } catch (error) {
        console.error('Error while recovering trending movies:', error);
      }
    }

    fetchData();
  }, []);

  const middleIndex = Math.floor(trendingMovies.length / 2);

  console.log('loading:', loading, 'pathname:', location.pathname);

  return (
    <div className="flex flex-col">
      <h2 className="mb-4 ml-6 text-2xl font-bold tracking-widest text-center text-white lato">Trending</h2>
      {loading && (location.pathname === '/' || location.pathname === '/homepage' ||  location.pathname === '/trending') ? ( 
        <Spinner />
      ) : (
        <Swiper
          effect={'coverflow'}
          autoplay={{ delay: 3500 }}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          initialSlide={middleIndex}
          coverflowEffect={{
            stretch: 0,
            rotate: 0,
            depth: 100,
            modifier: 3.5,
          }}
          modules={[EffectCoverflow, Autoplay]}
        >
          {trendingMovies.map(movie => (
            <SwiperSlide key={movie.id} className='my-5 swiper rounded-xl' >
              <Link to={`/detailsmovies/${movie.id}/`}>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className='object-cover rounded-xl'/>
              </Link> 
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
}

export default Trending;
