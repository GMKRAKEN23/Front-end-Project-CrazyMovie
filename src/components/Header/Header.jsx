import { useState } from 'react';
import Logo from '../Logo';
import BurgerMenu from './BurgerMenu';
import NavBar from '../../components/Header/NavBar';

function Header() {
    const [navBarActive, setNavBarActive] = useState(false);
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleNavBar = () => {
        setNavBarActive(!navBarActive);
        setMenuOpen(!isMenuOpen);
    };

    const closeNavBar = () => {
        setNavBarActive(false);
        setMenuOpen(false);
    };

    return (
        <div className='flex items-center justify-between w-full mx-auto '>
            <Logo closeMenu={closeNavBar} />
            <BurgerMenu isOpen={isMenuOpen} setOpen={setMenuOpen} toggleNavBar={toggleNavBar} />
            <NavBar active={navBarActive} />
        </div>
    );
}

export default Header;
