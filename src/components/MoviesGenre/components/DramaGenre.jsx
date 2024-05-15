import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { fetchDramaMovies } from '../../../api/MovieDrame';

function DramaGenre({ useSwiper = true }) {
    const [dramaMovies, setDramaMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const movies = await fetchDramaMovies();
                setDramaMovies(movies);
            } catch (error) {
                console.error('Erreur lors de la récupération des films de drame :', error);
            }
        }
        fetchData();
    }, []);

    const shouldRenderSwiper = useSwiper && dramaMovies.length > 0;

    return (
        <div>
            {shouldRenderSwiper ? (
                <div>
                    <h2 className="m-5 text-xl text-white">Drame</h2>
                    <Swiper
                        spaceBetween={10}
                        slidesPerView={3}
                        loop={false}
                        scrollbar={{ draggable: true }}
                    >
                        {dramaMovies.map(movie => (
                            <SwiperSlide key={movie.id}>
                                <Link to={`/detailsmovies/${movie.id}`}>
                                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} className='rounded-lg cursor-pointer w-[20em] h-[10em]' />
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            ) : dramaMovies.length > 0 ? (
                <div className="mt-10">
                    <h2 className="m-5 text-2xl text-center text-white">Drame</h2>
                    <div className="flex flex-wrap justify-center gap-8 pb-[5rem]">
                        {dramaMovies.map(movie => (
                            <Link to={`/detailsmovies/${movie.id}`} key={movie.id}>
                                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} className='rounded-lg cursor-pointer w-[9em] h-[13em]' />
                            </Link>
                        ))}
                    </div>
                </div>

            ) : null}
        </div>
    );
}

export default DramaGenre;
