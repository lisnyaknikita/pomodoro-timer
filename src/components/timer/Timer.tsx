import React, { useEffect, useRef, useState } from 'react';

import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import TimerBtns from '../timer-btns/TimerBtns';
import TimerCircles from '../timer-circles/TimerCircles';
import TimerName from '../timer-name/TimerName';
import TimerTop from '../timer-top/TimerTop';

import classes from './Timer.module.scss';

const Timer: React.FC = () => {
  const [isPaused, setIsPaused] = useState(true);

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

    return () => clearInterval(interval);
  }, [sessionMinutes, breakDuration]);

  let minutes: any = Math.floor(secondsLeft / 60);
  if (minutes < 10) minutes = '0' + minutes;
  let seconds: any = secondsLeft % 60;
  if (seconds < 10) seconds = '0' + seconds;

  const onRebootTimer = (min: number, sec: number) => {
    minutes = min;
    seconds = sec;
  };

  return (
    <div className='timer'>
      <TimerTop
        minutes={minutes}
        seconds={seconds}
        onRebootTimer={onRebootTimer}
      />
      <div className='timer__content'>
        <TimerName />
        <div className={classes.timerCountdown}>
          <p>
            {minutes} : {seconds}
          </p>
        </div>
        <TimerCircles />
        <TimerBtns
          isPausedRef={isPausedRef}
          isPaused={isPaused}
          setIsPaused={setIsPaused}
        />
      </div>
    </div>
  );
};

export default Timer;
