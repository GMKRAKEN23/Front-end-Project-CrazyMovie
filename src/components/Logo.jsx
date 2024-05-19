import { Link } from "react-router-dom";

function Logo({ closeMenu }) {
    return (
        <Link to="/homepage" className="cursor-pointer" onClick={closeMenu}>
            <img src="/assets/logo.png" className="w-[125px] h-[125px]" alt="logo_crazy_movie" />
        </Link>
    );
}

export default Logo;
