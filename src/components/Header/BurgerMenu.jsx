import { Spin as Hamburger } from 'hamburger-react'
import { useState } from 'react';

function BurgerMenu() {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className='spacing-burger'>
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