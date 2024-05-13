import { Swiper, SwiperSlide } from 'swiper/react';

import { useState, useEffect } from "react";
import { fetchActionMovies } from "../../../api/MovieActionApi";

function ActionMovies() {
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

    return (
        <div className="mt-10">
            <h2 className="text-white text-xl m-5">Action</h2>
            <Swiper
                spaceBetween={10} 
                slidesPerView={3} 
                loop={false} 
                scrollbar={{ draggable: true }}
            >
                {actionMovies.map(movie => (
                    <SwiperSlide key={movie.id}>
                        <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={movie.title} className="rounded-lg cursor-pointer w-[20em] h-[10em]" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default ActionMovies;
