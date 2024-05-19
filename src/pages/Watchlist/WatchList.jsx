import NavBarBottom from "../../components/NavBarBottom/NavBarBottom";
import ContainerWatchList from "./components/ContainerWatchList";

function WatchList(){
    return (
        <div className="flex flex-col items-center w-full h-full cursor-pointer">
            <h2 className="mb-3 text-2xl font-semibold tracking-widest text-center text-white mt-7 lato">Watchlist</h2> 
            <ContainerWatchList /> 
            <NavBarBottom />
        </div>
      
    )
}

export default WatchList;