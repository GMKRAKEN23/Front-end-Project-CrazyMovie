import { useState } from "react";
import { Link } from "react-router-dom";

function SearchBar() {
    const [searchTerm, setSearchTerm] = useState("");
    const [movieResults, setMovieResults] = useState([]);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_API_KEY}&query=${searchTerm}`);
            if (!response.ok) {
                throw new Error('Error searching for movies');
            }
            const data = await response.json();
            const filteredResults = data.results.filter(movie => movie.poster_path);
            setMovieResults(filteredResults);
        } catch (error) {
            console.error('Error searching for movies', error);
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
            <div className="grid w-3/4 grid-cols-2 gap-4 mx-auto mt-4">
                {movieResults.map((movie) => (
                    <Link to={`/detailsmovies/${movie.id}`} key={movie.id}>
                        <div className="flex flex-col items-center">
                            <img
                                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                alt={movie.title}
                                className="mt-4 rounded-lg cursor-pointer w-[10em] h-[10em]"
                            />
                            <p className="mt-2 tracking-wider text-center text-white">{movie.title}</p>
                            <p className="text-orange-600">({new Date(movie.release_date).getFullYear()})</p>
                        </div>
                    </Link>
                ))}
            </div>
        </form>
    );
}

export default SearchBar;
