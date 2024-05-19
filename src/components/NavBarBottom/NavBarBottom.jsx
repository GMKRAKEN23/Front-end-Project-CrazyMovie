import { Link, useLocation } from "react-router-dom";

function NavBarBottom() {
    const location = useLocation();

    const handleSearchClick = () => {
        if (location.pathname === "/searchmovie") {
            window.location.reload();
        }
    };

    return ( 
        <div className="fixed bottom-0 z-50 w-full h-16 -translate-x-1/2 bg-white border border-gray-600 left-1/2 ">
            <div className="grid h-full grid-cols-3 mx-auto">
                <button data-tooltip-target="tooltip-home" type="button" className="inline-flex flex-col items-center justify-center px-5">
                    <Link to="/homepage"><i className="text-4xl cursor-pointer bx bxs-home-alt-2"></i></Link>
                </button>
                <div className="flex items-center justify-center">
                    <button data-tooltip-target="tooltip-new" type="button" className="inline-flex items-center justify-center w-10 h-10 font-bold rounded-full hover:bg-white focus:outline-none" onClick={handleSearchClick}>
                        <Link to="/searchmovie"><i className="text-4xl cursor-pointer bx bx-search"></i></Link>
                    </button>
                </div>
                <button data-tooltip-target="tooltip-profile" type="button" className="inline-flex flex-col items-center justify-center px-5">
                    <Link to='/watchlist'><i className="text-4xl text-black cursor-pointer bx bxs-bookmark-star"></i></Link>
                </button>
            </div>
        </div>
    )
}

export default NavBarBottom;
