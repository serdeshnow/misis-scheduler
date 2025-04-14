import React, { useState } from 'react';
import s from './Navbar.module.scss';
import cn from 'classnames';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import IconButton from '@mui/material/IconButton';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import { Link } from 'react-router';
import { useNavigate } from "react-router";
// import { Logo } from '@shared/ui';

export const Navbar: React.FC = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState<boolean>(false);
  const navigate = useNavigate();
  // const USER_MOCK = {
  //   name: 'Username123',
  // }

  // const user = USER_MOCK;

  return (
    <nav className={cn(s.navbar, {[s.collapsed] : isNavCollapsed})}>
      {/*TODO: navbar username & logo*/}
      {/*{!isNavCollapsed && (*/}
      {/*  <>*/}
      {/*    <Logo/>*/}
      {/*    <h3 className={s.username}>{user.name}</h3>*/}
      {/*  </>*/}
      {/*)}*/}
      <IconButton
        onClick={() => setIsNavCollapsed(!isNavCollapsed)}
      >
        <ArrowBackRoundedIcon className={cn(isNavCollapsed && s.rotate180)} />
      </IconButton>

      <IconButton
        onClick={() => navigate('/')}
      >
        <ArrowBackRoundedIcon className={cn(isNavCollapsed && s.rotate180)} />
      </IconButton>

      <Link to={'/add-schedule'}>Добавить расписание</Link>


      <ul>
        <li>subject 1</li>
        <li>subject 2</li>
        <li>subject 3</li>
        <Link to={'/sber'}>SBER</Link>
      </ul>


      <IconButton  className={s.logoutBtn} aria-label='logout'>
        <LogoutRoundedIcon className={cn(isNavCollapsed ? s.yellow : s.green)} />
      </IconButton>
    </nav>
  );
};
