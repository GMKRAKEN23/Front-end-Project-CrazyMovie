import { Swiper, SwiperSlide } from 'swiper/react';
import { useState, useEffect } from "react";
import { fetchDramaMovies } from '../../../api/MovieDrame';

function DramaGenre() {
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

    return (
        <div>
            <h2 className='text-white text-xl m-5'>Drame</h2>
            <Swiper
                spaceBetween={10} 
                slidesPerView={3} 
                loop={false} 
                scrollbar={{ draggable: true }} 
            >
                {dramaMovies.map(movie => (
                    <SwiperSlide key={movie.id}>
                        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} className="rounded-lg cursor-pointer w-[20em] h-[10em]" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default DramaGenre;
