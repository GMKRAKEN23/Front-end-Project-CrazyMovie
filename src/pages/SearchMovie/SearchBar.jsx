import { useState } from "react";
import { keyApi } from "../../api/Key_api";

function SearchBar() {
    const [searchTerm, setSearchTerm] = useState("");
    const [movieResults, setMovieResults] = useState([]);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${keyApi}&query=${searchTerm}`);
            if (!response.ok) {
                throw new Error('Erreur lors de la recherche de films');
            }
            const data = await response.json();
            const filteredResults = data.results.filter(movie => movie.poster_path); // Filtrer les films sans affiche officielle
            setMovieResults(filteredResults);
        } catch (error) {
            console.error('Erreur lors de la recherche de films:', error);
        }
    };

    return (
        <form onSubmit={handleSearchSubmit} className="max-w-lg mx-auto mt-10">
            <div className="relative w-3/4 mx-auto">
                <input 
                    type="search" 
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="block p-2.5 w-full regular tracking-wider z-20 text-base bg-white rounded-lg border bg-white placeholder-black" 
                    placeholder="Search your best movie" 
                />
                <button type="submit" className="absolute top-0 end-0 p-2.5 text-white font-medium h-full rounded-e-lg  hover:bg-orange-700 focus:outline-none bg-orange-600">
                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                </button>
            </div>
            <div className="mt-4 ">
                {movieResults.map((movie) => (
                    <div key={movie.id}>
                        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} className="mt-4 rounded-lg cursor-pointer w-[10em] h-[10em] text-center" />
                    </div>
                ))}
            </div>
        </form>
    );
}

export default SearchBar;
