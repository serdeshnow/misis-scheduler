import React, { ButtonHTMLAttributes } from 'react';
import { useNavigate } from 'react-router';
import cn from 'classnames';
import styles from './NavbarButton.module.scss';

interface SidebarButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  text: string;
  to?: string;
  collapsed: boolean;
  onClick?: () => void;
  isInteractive?: boolean; // false для "некликабельного" текста
}

export const NavbarButton: React.FC<SidebarButtonProps> = ({
                                                             icon,
                                                             text,
                                                             to,
                                                             collapsed,
                                                             onClick,
                                                             className,
                                                             isInteractive = true,
                                                           }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (!isInteractive) return;
    if (onClick) {
      onClick();
    } else if (to) {
      navigate(to);
    }
  };

  const Wrapper = isInteractive ? 'button' : 'div';

  return (
    <Wrapper
      onClick={handleClick}
      className={cn(
        className,
        styles.button,
        {
          [styles.collapsed]: collapsed,
          [styles.disabled]: !isInteractive,
        })}
    >
      <span className={styles.icon}>{icon}</span>
      {!collapsed && <span className={styles.text}>{text}</span>}
    </Wrapper>
  );
};
