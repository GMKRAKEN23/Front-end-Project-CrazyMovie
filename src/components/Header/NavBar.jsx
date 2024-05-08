import Logo from '../../components/Logo'
import BurgerMenu from './BurgerMenu';

function NavBar(){
    return(
        <div className='flex justify-between items-center mx-auto w-full'>
            <Logo/>
            <BurgerMenu />
        </div>
    )
}

export default NavBar;