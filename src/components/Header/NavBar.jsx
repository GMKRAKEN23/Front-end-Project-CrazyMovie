import { Link } from "react-router-dom";

function NavBar({ active }) {
    return (
        <div className={`${active ? "block" : "hidden"} absolute h-full top-32 bg-black w-full z-10`}>
            <ul className="list-none flex flex-col items-stard">
                <Link><li className="text-white text-2xl mb-3 pl-10 hover:text-orange-600">Action</li></Link>
                <Link><li className="text-white text-2xl my-3 pl-10 hover:text-orange-600">Comedy</li></Link>
                <Link><li className="text-white text-2xl my-3 pl-10 hover:text-orange-600">Family</li></Link>      
                <Link><li className="text-white text-2xl my-3 pl-10 hover:text-orange-600">Animation</li></Link>          
                <Link><li className="text-white text-2xl my-3 pl-10 hover:text-orange-600">Fantasy</li></Link>
                <Link><li className="text-white text-2xl my-3 pl-10 hover:text-orange-600">Drama</li></Link>
                <Link><li className="text-white text-2xl my-3 pl-10 hover:text-orange-600">Thriller</li></Link>
                <Link><li className="text-white text-2xl my-3 pl-10 hover:text-orange-600">Adventure</li></Link>
                <Link><li className="text-white text-2xl my-3 pl-10 hover:text-orange-600">Science Fiction</li></Link>
            </ul>

        </div>
    )
}

export default NavBar;