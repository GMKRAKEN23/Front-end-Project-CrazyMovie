import Logo from '../Logo'
import BurgerMenu from './BurgerMenu';
import NavBar from '../../components/Header/NavBar';
import { useState } from "react";

function Header(){
    const [navBarActive, setNavBarActive] = useState(false);

    const toggleNavBar = () => {
        setNavBarActive(!navBarActive);
    };

    return(
        <div className='flex items-center justify-between w-full mx-auto '>
            <Logo/>
            <BurgerMenu toggleNavBar={toggleNavBar}/>
            <NavBar active={navBarActive}/>
        </div>
    )
}

export default Header;
