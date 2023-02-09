import React, { useEffect, useRef, useState } from 'react';

import { BsPlay } from 'react-icons/bs';
import { BsPause } from 'react-icons/bs';

import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../store/store';
import {
  changeSessionMinutes,
  minusSessionMinutes,
} from '../../store/TimerSlice';

import classes from './TimerCountdown.module.scss';

// interface ITimerCountdownProps {
//   isPaused: boolean;
// }

const TimerCountdown: React.FC<any> = ({ isPaused , setIsPaused}) => {
  const [secondsLeft, setSecondsLeft] = useState(0);
  const [mode, setMode] = useState('break'); // work/break/null

  const secondsLeftRef = useRef(secondsLeft);
  const modeRef = useRef(mode);
  const isPausedRef = useRef(isPaused);

  const sessionMinutes = useSelector(
    (state: RootState) => state.timer.sessionMinutes
  );
  const breakDuration = useSelector(
    (state: RootState) => state.timer.breakDuration
  );

  const switchMode = () => {
    const nextMode = modeRef.current === 'work' ? 'break' : 'work';
    const nextSeconds =
      (nextMode === 'work' ? sessionMinutes : breakDuration) * 60;
    setMode(nextMode);
    modeRef.current = nextMode;
    setSecondsLeft(nextSeconds);
    secondsLeftRef.current = nextSeconds;
  };

  const tick = () => {
    secondsLeftRef.current--;
    setSecondsLeft(secondsLeftRef.current);
  };

  const initTimer = () => {
    setSecondsLeft(sessionMinutes * 60);
  };

  useEffect(() => {
    initTimer();

    const interval = setInterval(() => {
      if (isPausedRef.current) {
        return;
      }
      if (secondsLeftRef.current === 0) {
        return switchMode();
      }

      tick();
    }, 1000);

    return ()=> clearInterval(interval);
  }, [sessionMinutes, breakDuration]);

  let minutes:any = Math.floor(secondsLeft / 60);
  if (minutes < 10) minutes = '0' + minutes
  let seconds:any = secondsLeft % 60
  if (seconds < 10) seconds = '0' + seconds

  return (
    <>
    <div className={classes.timerCountdown}>
      <p>
        {minutes} : {seconds}
      </p>
    </div>
    <button className={classes.timerPlay}>
      {isPaused ? (
          <BsPlay onClick={() => {setIsPaused(false); isPausedRef.current = false}} />
      ) : (
          <BsPause onClick={() => {setIsPaused(true); isPausedRef.current = true}} />
      )}
    </button>
    </>
    
    
  );
};

export default TimerCountdown;
