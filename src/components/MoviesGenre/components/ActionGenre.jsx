import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { fetchActionMovies } from "../../../api/MovieActionApi";

function ActionMovies({ enableSwiper }) {
    const [actionMovies, setActionMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const movies = await fetchActionMovies();
                setActionMovies(movies);
            } catch (error) {
                console.error('Erreur lors de la récupération des films d\'action :', error);
            }
        }
        fetchData();
    }, []);

    const shouldRenderSwiper = enableSwiper !== false; 

    return (
        <div className="mt-10">
            {shouldRenderSwiper ? (
                <h2 className="m-5 text-xl text-white">Action</h2>
            ) : (
                <h2 className="m-5 text-2xl text-center text-white">Action</h2>
            )}
            {shouldRenderSwiper && ( 
                <Swiper
                    spaceBetween={10} 
                    slidesPerView={3} 
                    loop={false} 
                    scrollbar={{ draggable: true }}
                >
                    {actionMovies.map(movie => (
                        <SwiperSlide key={movie.id}>
                            <Link to={`/detailsmovies/${movie.id}`}>
                                <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={movie.title} className="rounded-lg cursor-pointer w-[20em] h-[10em]" />
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
            {!shouldRenderSwiper && ( 
                <div className="flex flex-wrap justify-center gap-8">
                    {actionMovies.map(movie => (
                        <Link to={`/detailsmovies/${movie.id}`} key={movie.id}>
                            <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={movie.title} className="rounded-lg cursor-pointer w-[9em] h-[13em]" />
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}

export default ActionMovies;
