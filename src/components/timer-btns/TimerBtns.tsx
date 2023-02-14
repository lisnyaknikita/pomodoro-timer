import React from 'react';

import { BsPlay } from 'react-icons/bs';
import { BsPause } from 'react-icons/bs';

import classes from './TimerBtns.module.scss';

interface ITimerBtns {
  isPausedRef: React.MutableRefObject<boolean>;
  isPaused: boolean;
  setIsPaused: (isPaused: boolean) => void;
  completeRef: React.MutableRefObject<boolean>;

}

const TimerBtns: React.FC<ITimerBtns> = ({
  isPausedRef,
  isPaused,
  setIsPaused,
  completeRef,

}) => {
  const onPlayClick = () => {
    setIsPaused(false);
    isPausedRef.current = false;
  };

  return (
    <button className={classes.timerPlay}>
      {isPaused || completeRef.current === true ? (
        <BsPlay onClick={() => onPlayClick()} />
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
