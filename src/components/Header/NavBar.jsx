import Logo from '../../components/Logo'
import BurgerMenu from './BurgerMenu';

function NavBar(){
    return(
        <div className='flex'>
            <Logo/>
            <BurgerMenu />
        </div>
    )
}

export default NavBar;