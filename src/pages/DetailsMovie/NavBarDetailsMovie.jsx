import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function NavBarDetailsMovie({ movieId }) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setIsFavorite(favorites.includes(movieId));
  }, [movieId]);

  const handleFavoriteToggle = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    let newFavorites;
    if (favorites.includes(movieId)) {
      newFavorites = favorites.filter(id => id !== movieId);
    } else {
      newFavorites = [...favorites, movieId];
    }
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="flex items-center justify-around w-full h-20 cursor-pointer">
      <Link to="/"><i className="text-4xl text-white bx bx-chevron-left"></i></Link>
      <h2 className="text-xl font-semibold tracking-widest text-white lato">Detail</h2>
      <i
        className={`bx bxs-bookmark-star text-4xl cursor-pointer ${isFavorite ? "text-orange-600" : "text-white"}`}
        onClick={handleFavoriteToggle}
      ></i>
    </div>
  );
}

export default NavBarDetailsMovie;
