import  { useState } from 'react';
import MovieItemsPopular from "./MoviesSection/MovieItemsPopular";
import MovieItemsTopRated from "./MoviesSection/MovieItemsTopRated";

function ListMovies({ movies }) {
  const [activeTab, setActiveTab] = useState('Popular');

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="my-5">
      <div className="w-full flex justify-around my-5 mx-auto">
        <a href="#" className={`lato text-lg tracking-widest font-bold ${activeTab === 'Popular' ? 'text-orange-600' : 'text-white'}`} onClick={() => handleTabChange('Popular')}>Popular</a>
        <a href="#" className={`lato text-lg tracking-widest font-bold ${activeTab === 'TopRated' ? 'text-orange-600' : 'text-white'}`} onClick={() => handleTabChange('TopRated')}>Top Rated</a>
        <a href="#" className={`lato text-lg tracking-widest font-bold ${activeTab === 'Marvel' ? 'text-orange-600' : 'text-white'}`} onClick={() => handleTabChange('Marvel')}>Marvel</a>
      </div>
      <div className="my-4 mx-10">
        <div className={`${activeTab === 'Popular' ? 'block' : 'hidden'}`}>
          <MovieItemsPopular movies={movies} />
        </div>
        <div className={`${activeTab === 'TopRated' ? 'block' : 'hidden'}`}>
          <MovieItemsTopRated movies={movies} />
        </div>
        {/* Ajoutez d'autres cas pour d'autres onglets si nécessaire */}
      </div>
    </div>
  );
}

export default ListMovies;

