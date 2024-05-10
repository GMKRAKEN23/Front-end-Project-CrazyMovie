import { Link } from "react-router-dom";
import NavBarBottom from "../../components/NavBarBottom/NavBarBottom";

function WatchList(){
    return (
        <div className="w-full flex justify-around h-20 cursor-pointer items-center">
            <Link to='/'><i className='bx bx-chevron-left text-white text-4xl'></i></Link>
            <h2 className="lato text-white text-xl tracking-widest font-semibold">Watch list</h2>  
            <NavBarBottom />
        </div>
      
    )
}

export default WatchList;