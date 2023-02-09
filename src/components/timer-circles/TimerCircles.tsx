import React from 'react';

import { useSelector } from 'react-redux';

import { RootState } from '../../store/store';

import classes from './TimerCircles.module.scss'

const TimerCircles: React.FC = () => {
  const numberOfSession = useSelector(
    (state: RootState) => state.timer.numberOfSession
  );

  return (
    <ul className={classes.timerCircles}>
      {[...new Array(numberOfSession)].map(circle=> <li></li>)}
    </ul>
  );
};

export default TimerCircles;
