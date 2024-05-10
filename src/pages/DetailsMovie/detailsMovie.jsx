import NavBarDetailsMovie from "./NavBarDetailsMovie";
import Rating from "../../components/Rating";
import TitleMovie from "../../components/TitleMovies"
import DateMovie from "../../components/DateMovies";
import GenreMovie from "../../components/GenreMovies";


function DetailsMovies() {

    return (
        <div>
            <NavBarDetailsMovie />
            <Rating />
            <TitleMovie />
            <div className="flex">
                <DateMovie />
                <GenreMovie />
            </div>

        </div>
    )
}

export default DetailsMovies;
