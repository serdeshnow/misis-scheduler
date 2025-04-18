import React, { useState } from 'react';
import s from './Navbar.module.scss';
import cn from 'classnames';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import { Link } from 'react-router';
import { useNavigate } from 'react-router';
import { NavbarButton } from '@shared/ui';
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
      <NavbarButton
        icon={<MenuRoundedIcon className={s.light} />}
        collapsed={isNavCollapsed}
        onClick={() => setIsNavCollapsed(!isNavCollapsed)}
        text={'SHEDULER APP'}
      />
      <NavbarButton
        icon={<HomeRoundedIcon className={s.light} />}
        collapsed={isNavCollapsed}
        onClick={() => navigate('/')}
        text={'Домашняя'}
      />
      <NavbarButton
        icon={<AddRoundedIcon className={s.light} />}
        collapsed={isNavCollapsed}
        to={'/add-schedule'}
        text={'Добавить расписание'}
      />

      <NavbarButton
        isInteractive={false}
        icon={<GroupsRoundedIcon className={s.light} />}
        collapsed={isNavCollapsed}
        text={'Группы'}
      />
      <hr className={cn('hr')} />
      <ul className={s.list}>
        {MOCK_LIST_ITEMS.map(schedule => (
          <Link className={s.itemLink} to={schedule.path}>
            <div className={s.itemIcon}>{calculateIcon(schedule.title)}</div>
            {!isNavCollapsed && <span className={s.itemTitle}>{schedule.title}</span>}
          </Link>
        ))}
      </ul>

      <NavbarButton
        isInteractive={false}
        icon={<SchoolRoundedIcon className={s.light} />}
        collapsed={isNavCollapsed}
        text={'Преподаватели'}
      />
      <hr className={cn('hr')} />
      <ul className={s.list}>
        {MOCK_LIST_ITEMS.map(schedule => (
          <Link className={s.itemLink} to={schedule.path}>
            <div className={s.itemIcon}>{calculateIcon(schedule.title)}</div>
            {!isNavCollapsed && <span className={s.itemTitle}>{schedule.title}</span>}
          </Link>
        ))}
      </ul>


      <NavbarButton
        className={s.logoutBtn}
        icon={<LogoutRoundedIcon className={s.light} />}
        collapsed={isNavCollapsed}
        text={'Выйти'}
      />
    </nav>
  );
};
