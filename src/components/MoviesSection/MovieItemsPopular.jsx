function MovieItemsPopular({ movies }) {
    return (
        <div className="w-full grid grid-cols-3 gap-4">
            {movies.slice(0,18).map(movie => (
                <img key={movie.id} src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} className="w-full rounded-xl h-auto" />
            ))}
        </div>
    )

}

export default MovieItemsPopular;