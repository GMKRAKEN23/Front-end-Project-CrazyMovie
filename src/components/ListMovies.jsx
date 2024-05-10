import  { useState } from 'react';
import MovieItemsPopular from "./MoviesSection/MovieItemsPopular";
import MovieItemsTopRated from "./MoviesSection/MovieItemsTopRated";
import MovieItemsUpComing from "./MoviesSection/MovieItemsUpComing";
import { Link } from 'react-router-dom';

function ListMovies({ movies }) {
  const [activeLink, setActiveTab] = useState('Popular');

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="my-5">
      <div className="w-full flex justify-around my-5 mx-auto">
        <Link to='/' className={`lato text-lg tracking-widest font-bold ${activeLink === 'Popular' ? 'text-orange-600' : 'text-white'}`} onClick={() => handleTabChange('Popular')}>Popular</Link>
        <Link to='/' className={`lato text-lg tracking-widest font-bold ${activeLink === 'TopRated' ? 'text-orange-600' : 'text-white'}`} onClick={() => handleTabChange('TopRated')}>Top Rated</Link>
        <Link to='/' className={`lato text-lg tracking-widest font-bold ${activeLink === 'UpComing' ? 'text-orange-600' : 'text-white'}`} onClick={() => handleTabChange('UpComing')}>Upcoming</Link>
      </div>
      <div className="my-4 mx-10">
        <div className={`${activeLink === 'Popular' ? 'block' : 'hidden'}`}>
          <MovieItemsPopular movies={movies} />
        </div>
        <div className={`${activeLink === 'TopRated' ? 'block' : 'hidden'}`}>
          <MovieItemsTopRated movies={movies} />
        </div>
        <div className={`${activeLink === 'UpComing' ? 'block' : 'hidden'}`}>
          <MovieItemsUpComing movies={movies} />
        </div>
      </div>
    </div>
  );
}

export default ListMovies;

