import { Link } from "react-router-dom";

function NavBar({ 
    active, 
    onActionClick, 
    onComedyClick, 
    onFamilyClick, 
    onFantasyClick, 
    onDramaClick, 
    onHorrorClick, 
    onScienceFictionClick 
}) {
    return (
        <div className={`${active ? "block" : "hidden"} absolute top-32 bg-[#0a0a0a] h-[101em] w-full z-10`}>
            <ul className="flex flex-col items-start list-none">
                <Link to='/searchmovie/action'><li className="pl-10 mb-3 text-2xl text-white" onClick={onActionClick}>Action</li></Link>
                <Link to='/searchmovie/comedy'><li className="pl-10 my-3 text-2xl text-white" onClick={onComedyClick}>Comedy</li></Link>
                <Link to='/searchmovie/family'><li className="pl-10 my-3 text-2xl text-white" onClick={onFamilyClick}>Family</li></Link>                
                <Link to='/searchmovie/fantasy'><li className="pl-10 my-3 text-2xl text-white" onClick={onFantasyClick}>Fantasy</li></Link>
                <Link to='/searchmovie/drama'><li className="pl-10 my-3 text-2xl text-white" onClick={onDramaClick}>Drama</li></Link>
                <Link to='/searchmovie/horror'><li className="pl-10 my-3 text-2xl text-white" onClick={onHorrorClick}>Horror</li></Link>
                <Link to='/searchmovie/sciencefiction'><li className="pl-10 my-3 text-2xl text-white" onClick={onScienceFictionClick}>Science Fiction</li></Link>
            </ul>
        </div>
    );
}

export default NavBar;
