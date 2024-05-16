import NavBarBottom from "../../components/NavBarBottom/NavBarBottom";
import ContainerWatchList from "../Watchlist/ContainerWatchList";

function WatchList(){
    return (
        <div className="flex items-center justify-center w-full h-20 cursor-pointer">
            <h2 className="text-2xl font-semibold tracking-widest text-center text-white lato">Watchlist</h2> 
            <ContainerWatchList /> 
            <NavBarBottom />
        </div>
      
    )
}

export default WatchList;