import NavBarDetailsMovie from "./NavBarDetailsMovie";
import Rating from "../../components/Rating";
import TitleMovie from "../../components/TitleMovies"
import DateMovie from "../../components/DateMovies";
import GenreMovie from "../../components/GenreMovies";
import TimeMovies from "../../components/TimeMovies";
import ImageMovie from "../../components/ImageMovies";
import OverviewMovie from "../../components/OverviewMovie";

function DetailsMovies() {

    return (
        <div>
            <NavBarDetailsMovie />
            <TitleMovie />
            <div className="relative">
                <ImageMovie />
                <Rating />
            </div>

            <div className="flex justify-center w-11/12 w-full mx-auto my-5">
                <DateMovie />
                <GenreMovie />
                <TimeMovies />
            </div>
            <OverviewMovie />
        </div>
    )
}

export default DetailsMovies;
