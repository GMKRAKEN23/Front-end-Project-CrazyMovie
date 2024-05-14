import { Swiper, SwiperSlide } from 'swiper/react';
import { useState, useEffect } from "react";
import { fetchFantasyMovies } from '../../../api/MovieFantasy';
import { Link } from 'react-router-dom';

function FantasyGenre() {
    const [fantasyMovies, setFantasyMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const movies = await fetchFantasyMovies();
                setFantasyMovies(movies);
            } catch (error) {
                console.error('Erreur lors de la récupération des films de fantasy :', error);
            }
        }
        fetchData();
    }, []);

    return (
        <div>
            <h2 className="text-white text-xl m-5">Fantasy</h2>
            <Swiper
                spaceBetween={10} 
                slidesPerView={3} 
                loop={false} 
                scrollbar={{ draggable: true }} 
            >
                {fantasyMovies.map(movie => (
                    <SwiperSlide key={movie.id}>
                        <Link to={`/detailsmovies/${movie.id}`}>
                        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} className='rounded-lg cursor-pointer w-[20em] h-[10em]'/>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default FantasyGenre;
