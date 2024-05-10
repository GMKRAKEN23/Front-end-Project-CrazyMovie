import NavBarDetailsMovie from "./NavBarDetailsMovie";
import Rating from "../../components/Rating";
import TitleMovie from "../../components/TitleMovies"
import DateMovie from "../../components/DateMovies";
import GenreMovie from "../../components/GenreMovies";
import TimeMovies from "../../components/TimeMovies";
import ImageMovie from "../../components/ImageMovies";

function DetailsMovies() {

    return (
        <div>
            <NavBarDetailsMovie />
            <ImageMovie />
            <Rating />
            <TitleMovie />
            <div className="flex justify-center w-full w-11/12 mx-auto my-5">
                <DateMovie />
                <GenreMovie />
                <TimeMovies />
            </div>
            </div>
            )
}

 export default DetailsMovies;
