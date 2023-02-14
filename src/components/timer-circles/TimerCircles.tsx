import React from 'react';

import { useSelector } from 'react-redux';

import { RootState } from '../../store/store';

import classes from './TimerCircles.module.scss';



const TimerCircles: React.FC = () => {
  const numberOfSession = useSelector(
    (state: RootState) => state.timer.numberOfSession
  );
  const completeCircles = useSelector(
    (state: RootState) => state.timer.completeCircles
  );

  const circlesArray = [...new Array(numberOfSession)];
  // console.log(completeCircles)
  return (
    <ul className={classes.timerCircles}>
      
      {circlesArray.map((circle, i) => (
        <li key={i}
          className={`${i === completeCircles.length - 1 ? 'complete' : ''}`}
        ></li>
      ))}
    </ul>
  );
};

export default TimerCircles;
