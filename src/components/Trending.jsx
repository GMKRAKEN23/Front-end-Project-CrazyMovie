import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from '../api/trendingApi'; 
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

function Trending() {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const movies = await fetchTrendingMovies();
        setTrendingMovies(movies);
      } catch (error) {
        console.error('Error while recovering trending movies:', error);
      }
    }

    fetchData();
  }, []);

  const middleIndex = Math.floor(trendingMovies.length / 2);

  return (
    <div className="flex flex-col">
      <h2 className="mb-4 ml-6 text-2xl font-bold tracking-widest text-center text-white lato">Trending</h2>
      {trendingMovies && trendingMovies.length > 0 ? (
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
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Trending;