import classNames from 'classnames';
import { useState } from 'react';

 function BurgerMenu() {
  const [opened, setOpened] = useState(false);

  return (
    <div className={classNames(`tham tham-e-squeeze tham-w-10 bg-white`, { 'tham-active': opened })}>
      <div className="tham-box">
        <div className="tham-inner"/>
      </div>
    </div>
  );
}

export default BurgerMenu;