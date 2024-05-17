import { Link } from "react-router-dom";

function Logo(){
    return (
        <>
        <Link to="/homepage" className="cursor-pointer">
            <img src="./assets/logo.png" className="w-[125px] h-[125px]" alt="logo_crazy_movie" />
        </Link>
        </>
    )
}

export default Logo;