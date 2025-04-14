import React from 'react';
import s from './AddScheduleCard.module.scss';

export const AddScheduleCard: React.FC = () => {
  return (
    <div className={s.root}>
      <div className={s.backBtn}>← Назад </div>
      <h3 className={s.stepTitle}>stepNo stepTitle</h3>

      <div className={s.content}>
        <form id='add'>
          <input type="radio" id="huey" name="add" value="huey"/>
          <label htmlFor="huey">Huey</label>
          <input type="radio" id="huey" name="add" value="dewey"/>
          <label htmlFor="huey">dewey</label>
        </form>
      </div>

      <div className={s.stepper}>progressbar</div>
    </div>
  );
};
