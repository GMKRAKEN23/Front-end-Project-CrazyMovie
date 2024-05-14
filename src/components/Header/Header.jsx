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
        <div className='flex justify-between items-center mx-auto w-full'>
            <Logo/>
            <BurgerMenu toggleNavBar={toggleNavBar}/>
            <NavBar active={navBarActive}/>
        </div>
    )
}

export default Header;
