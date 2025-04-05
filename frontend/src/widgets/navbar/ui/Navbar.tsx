import React, { useState } from 'react';
import s from './Navbar.module.scss';
import cn from 'classnames';

export const Navbar: React.FC = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState<boolean>(false);

  return (
    <nav className={cn(s.navbar, {[s.collapsed] : isNavCollapsed})}>
      <button
        className={s.toggleButton}
        onClick={() => setIsNavCollapsed(!isNavCollapsed)}
      >
        {isNavCollapsed ? 'open' : 'close'}
      </button>
      Navbar
    </nav>
  );
};
