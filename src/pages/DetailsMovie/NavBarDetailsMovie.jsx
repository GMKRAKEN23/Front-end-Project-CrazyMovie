import { Link } from "react-router-dom";

function NavBarDetailsMovie(){
    return (
        <div className="w-full flex justify-around h-20 cursor-pointer items-center">
            <Link to='/'><i className='bx bx-chevron-left text-white text-4xl'></i></Link>
            <h2 className="lato text-white text-xl tracking-widest font-semibold">Detail</h2>
            <a href="#"><i className='bx bxs-bookmark-star text-white text-4xl cursor-pointer'></i></a>
        </div>
    )
}

export default NavBarDetailsMovie;