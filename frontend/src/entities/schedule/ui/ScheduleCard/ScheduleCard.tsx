import React from 'react';
import { Link } from 'react-router-dom';
import s from './ScheduleCard.module.scss';
import cn from 'classnames';
import { Button } from '@shared/ui';
import type { Schedule } from '@entities/schedule';

interface Props {
  // product
  schedule: Schedule;

}

export const ScheduleCard: React.FC<Props> = ({schedule}) => {
  const { name, image } = schedule;

  return (
    <Link to={'/schedule/1'} className={s.root}>
      <div className={s.imageContainer}>
        <div
          className={s.image}
          style={{ backgroundImage: `url('${image}')` }}
        >
        </div>
      </div>
      <div className={s.content}>
        <div className={s.btnContainer}>
          <Button>
            ред.
          </Button>
          <Button>
            удалить
          </Button>
        </div>
        <div className={cn(s.title, 'text_base')}>{name}</div>
        {/*<div className={cn(s.name, 'text_bold')}>*/}
          {/*{formatPrice(price)}*/}
          {/*{oldPrice && oldPrice !== price && (*/}
          {/*  <span className={css.oldPrice}>{formatPrice(oldPrice, false)}</span>*/}
          {/*)}*/}
        {/*</div>*/}
        {/*{bottomContentSlot && (*/}
        {/*  <div className={css.contentActions}>{bottomContentSlot}</div>*/}
        {/*)}*/}
      </div>
      {/*{actionSlot && <div className={css.actions}>{actionSlot}</div>}*/}
    </Link>
  )
}
