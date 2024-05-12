import NavBarBottom from "../../components/NavBarBottom/NavBarBottom";

function WatchList(){
    return (
        <div className="w-full flex h-20 cursor-pointer justify-center items-center">
            <h2 className="lato text-white text-2xl tracking-widest font-semibold text-center">Watchlist</h2>  
            <NavBarBottom />
        </div>
      
    )
}

export default WatchList;