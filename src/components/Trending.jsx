import  { useState, useEffect } from 'react';
import { fetchTrendingMovies } from '../api/TrendingApi'; 
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper/modules';
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
        console.error('Erreur lors de la récupération des films trending:', error);
      }
    }

    fetchData();
  }, []);

  const middleIndex = Math.floor(trendingMovies.length / 2);

  return (
    <div className="flex flex-col">
      <h2 className="text-white tracking-wider text-center font-bold ml-6 lato text-2xl mb-4">Trending</h2>
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
          modules={[EffectCoverflow]}
        >
          {trendingMovies.map(movie => (
            <SwiperSlide key={movie.id} className='swiper my-5 rounded-xl'>
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className='' /> 
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