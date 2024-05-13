import { Swiper, SwiperSlide } from 'swiper/react';
import { useState, useEffect } from "react";
import { fetchComedyMovies } from '../../../api/MovieComedy';

function ComedyGenre() {
    const [comedyMovies, setComedyMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const movies = await fetchComedyMovies();
                setComedyMovies(movies);
            } catch (error) {
                console.error('Erreur lors de la récupération des films de comédie :', error);
            }
        }
        fetchData();
    }, []);

    return (
        <div>
            <h2 className="text-white text-xl m-5">Comedy</h2>
            <Swiper
                spaceBetween={10} 
                slidesPerView={3} 
                loop={false} 
                scrollbar={{ draggable: true }} 
            >
                {comedyMovies.map(movie => (
                    <SwiperSlide key={movie.id}>
                        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} className='rounded-lg cursor-pointer w-[20em] h-[10em]'/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default ComedyGenre;
