import Logo from '../Logo'
import BurgerMenu from './BurgerMenu';
import NavBar from '../../components/Header/NavBar';
import { useState } from "react";
import { Link } from 'react-router-dom';

function Header(){
    const [navBarActive, setNavBarActive] = useState(false);

    const toggleNavBar = () => {
        setNavBarActive(!navBarActive);
    };

    return(
        <div className='flex items-center justify-between w-full mx-auto'>
            <Logo/>
            <Link to="/ggg" className='text-white'>???</Link>
            <BurgerMenu toggleNavBar={toggleNavBar}/>
            <NavBar active={navBarActive}/>
        </div>
    )
}

export default Header;
