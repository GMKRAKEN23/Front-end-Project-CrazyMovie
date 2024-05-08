import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

function Trending({ movies }) {
    const middleIndex = Math.floor(movies.length / 2);

    return (
        <div className="flex flex-col">
            <h2 className="text-white tracking-wider text-left ml-6 lato text-xl mb-4">Trending</h2>
            {movies && movies.length > 0 ? (
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
                    {movies.map(movie => (
                        <SwiperSlide key={movie.id} className='swiper my-5'>
                            <div className='rounded-xl w-auto h-full'>
                               <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className='' /> 
                            </div>
                            
                        </SwiperSlide>
                    ))}
                </Swiper>

            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}

export default Trending;