import ActionGenre from "../../components/MoviesGenre/components/ActionGenre";
import ComedyGenre from "../../components/MoviesGenre/components/ComedyGenre";
import DramaGenre from "../../components/MoviesGenre/components/DramaGenre";
import HorrorGenre from "../../components/MoviesGenre/components/HorrorGenre";
import FantasyGenre from "../../components/MoviesGenre/components/FantasyGenre";
import ScienceFictionGenre from "../../components/MoviesGenre/components/ScienceFictionGenre";
import FamilyGenre from "../../components/MoviesGenre/components/FamilyGenre";

function ContainerGenre(){
    return (
        <div className="w-full spacing-container-height mb-20">
            <ActionGenre />
            <FamilyGenre />
            <DramaGenre />
            <HorrorGenre />
            <ComedyGenre />
            <FantasyGenre />
            <ScienceFictionGenre />
        </div>
    )
}

export default ContainerGenre;