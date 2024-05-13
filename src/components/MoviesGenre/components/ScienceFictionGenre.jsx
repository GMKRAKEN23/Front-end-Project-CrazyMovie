import { Swiper, SwiperSlide } from 'swiper/react';
import { useState, useEffect } from "react";
import { fetchScienceFictionMovies } from '../../../api/MovieScienceFiction';

function ScienceFictionGenre() {
    const [scienceFictionMovies, setScienceFictionMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const movies = await fetchScienceFictionMovies();
                setScienceFictionMovies(movies);
            } catch (error) {
                console.error('Erreur lors de la récupération des films de science-fiction :', error);
            }
        }
        fetchData();
    }, []);

    return (
        <div>
            <h2 className='text-white text-xl m-5'>Science-Fiction</h2>
            <Swiper
                spaceBetween={10} 
                slidesPerView={3} 
                loop={false} 
                scrollbar={{ draggable: true }} 
            >
                {scienceFictionMovies.map(movie => (
                    <SwiperSlide key={movie.id}>
                        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default ScienceFictionGenre;
