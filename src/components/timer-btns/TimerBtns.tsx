import React from 'react';

import { BsPlay } from 'react-icons/bs';
import { BsPause } from 'react-icons/bs';

import classes from './TimerBtns.module.scss';

interface ITimerBtns {
  isPausedRef: React.MutableRefObject<boolean>;
  isPaused: boolean;
  setIsPaused: (isPaused: boolean) => void;
}

const TimerBtns: React.FC<ITimerBtns> = ({ isPausedRef, isPaused, setIsPaused }) => {
  return (
    <button className={classes.timerPlay}>
      {isPaused ? (
        <BsPlay
          onClick={() => {
            setIsPaused(false);
            isPausedRef.current = false;
          }}
        />
      ) : (
        <BsPause
          onClick={() => {
            setIsPaused(true);
            isPausedRef.current = true;
          }}
        />
      )}
    </button>
  );
};

export default TimerBtns;
