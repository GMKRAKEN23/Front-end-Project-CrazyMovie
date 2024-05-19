import { Spin as Hamburger } from 'hamburger-react';

function BurgerMenu({ isOpen, setOpen, toggleNavBar }) {
    return (
        <div className='spacing-burger' onClick={toggleNavBar}>
            <Hamburger
                toggled={isOpen}
                toggle={setOpen}
                size={30}
                color='#FFFFFF'
            />
        </div>
    );
}

export default BurgerMenu;
