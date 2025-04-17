import React, { useState } from 'react';
import s from './Navbar.module.scss';
import cn from 'classnames';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import IconButton from '@mui/material/IconButton';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { Link } from 'react-router';
import { useNavigate } from 'react-router';
import { Button } from '@shared/ui';
// import { Logo } from '@shared/ui';

export const Navbar: React.FC = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState<boolean>(true);
  const navigate = useNavigate();

  const calculateIcon = (title: string) => {
    return title[0].toUpperCase();
  };
  // const USER_MOCK = {
  //   name: 'Username123',
  // }

  // const user = USER_MOCK;

  const MOCK_LIST_ITEMS: { title: string, path: string }[] = [
    {
      title: 'VENOM',
      path: '/schedule/1',
    },
    {
      title: 'Крыня',
      path: '/schedule/1',
    },
    {
      title: 'Оппенгеймер',
      path: '/schedule/1',
    },
    {
      title: 'SBER',
      path: '/sber',
    },
  ];

  return (
    <nav className={cn(s.navbar, { [s.collapsed]: isNavCollapsed })}>
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
        <MenuRoundedIcon className={s.light} />
      </IconButton>

      <IconButton
        onClick={() => navigate('/')}
      >
        <HomeRoundedIcon className={s.light} />
      </IconButton>

      <Link to={'/add-schedule'}>
        <Button variant="transparent" endIcon={<AddRoundedIcon />}>
          {!isNavCollapsed && 'Добавить расписание'}
        </Button>

      </Link>

      <h3>Группы</h3>
      <hr className={s.hr}/>
      <ul className={s.list}>
        {MOCK_LIST_ITEMS.map(schedule => (
          <Link className={s.itemLink} to={schedule.path}>
            <div className={s.itemIcon}>{calculateIcon(schedule.title)}</div>
            {!isNavCollapsed && <span className={s.itemTitle}>{schedule.title}</span>}
          </Link>
        ))}
      </ul>

      <h3>Преподаватели</h3>
      <hr className={s.hr}/>
      <ul className={s.list}>
        {MOCK_LIST_ITEMS.map(schedule => (
          <Link className={s.itemLink} to={schedule.path}>
            <div className={s.itemIcon}>{calculateIcon(schedule.title)}</div>
            {!isNavCollapsed && <span className={s.itemTitle}>{schedule.title}</span>}
          </Link>
        ))}
      </ul>


      <Button className={s.logoutBtn} variant="transparent"
              endIcon={<LogoutRoundedIcon className={s.light} />}>
        {!isNavCollapsed && 'Выйти'}
      </Button>
    </nav>
  );
};
