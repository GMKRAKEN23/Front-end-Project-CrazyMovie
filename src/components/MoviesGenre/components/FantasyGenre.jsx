import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { fetchFantasyMovies } from '../../../api/MovieFantasy';

function FantasyGenre({ useSwiper = true }) {
    const [fantasyMovies, setFantasyMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const movies = await fetchFantasyMovies();
                setFantasyMovies(movies);
            } catch (error) {
                console.error('Error recovering Fantasy movies:', error);
            }
        }
        fetchData();
    }, []);

    const shouldRenderSwiper = useSwiper && fantasyMovies.length > 0;

    return (
        <div>
            {shouldRenderSwiper ? (
                <div>
                    <h2 className="m-5 text-xl text-white">Fantasy</h2>
                    <Swiper
                        spaceBetween={10}
                        slidesPerView={3}
                        loop={false}
                        scrollbar={{ draggable: true }}
                    >
                        {fantasyMovies.map(movie => (
                            <SwiperSlide key={movie.id}>
                                <Link to={`/detailsmovies/${movie.id}`}>
                                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} className='rounded-lg cursor-pointer w-[20em] h-[10em]' />
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            ) : fantasyMovies.length > 0 ? (
                <div className="mt-10">
                    <h2 className="m-5 text-2xl text-center text-white">Fantasy</h2>
                    <div className="flex flex-wrap justify-center gap-8 pb-[5rem]">
                        {fantasyMovies.map(movie => (
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

export default FantasyGenre;
