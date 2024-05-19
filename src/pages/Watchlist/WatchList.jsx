import NavBarBottom from "../../components/NavBarBottom/NavBarBottom";
import ContainerWatchList from "./components/ContainerWatchList";

function WatchList(){
    return (
        <div className="flex flex-col items-center w-full h-20 h-screen cursor-pointer">
            <h2 className="my-4 text-2xl font-semibold tracking-widest text-center text-white lato">Watchlist</h2> 
            <ContainerWatchList /> 
            <NavBarBottom />
        </div>
      
    )
}

export default WatchList;