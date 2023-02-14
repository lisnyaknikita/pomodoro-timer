import React, { useEffect, useRef, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { updateCompleteCircles } from '../../store/TimerSlice';

import TimerBtns from '../timer-btns/TimerBtns';
import TimerCircles from '../timer-circles/TimerCircles';
import TimerName from '../timer-name/TimerName';
import TimerTop from '../timer-top/TimerTop';

import classes from './Timer.module.scss';

//@ts-ignore
import sound from '../../sound/timer-sound.mp3'

const Timer: React.FC = () => {
  const dispatch = useDispatch();

  const [isPaused, setIsPaused] = useState(true);

  const [secondsLeft, setSecondsLeft] = useState(0);
  const [mode, setMode] = useState('break'); // work/break/null

  const secondsLeftRef = useRef(secondsLeft);
  const modeRef = useRef(mode);
  const isPausedRef = useRef(isPaused);
  const completeRef = useRef(false);
  const nextModeName = useRef('break');

  const sessionMinutes = useSelector(
    (state: RootState) => state.timer.sessionMinutes
  );
  const breakMinutes = useSelector(
    (state: RootState) => state.timer.breakMinutes
  );
  const completeCircles = useSelector(
    (state: RootState) => state.timer.completeCircles
  );

  const numberOfSession = useSelector(
    (state: RootState) => state.timer.numberOfSession
  );

  // const completeCircles: string[] = [];
  const pushToCompleteCircles = (nexMode: string) => {
    if (nexMode === 'work') return dispatch(updateCompleteCircles());
    if (nexMode === 'break') return completeCircles;
  };
  // console.log(completeCircles);

  const audio = new Audio(sound)
  audio.volume= 0.5

  const switchMode = () => {
    audio.play()
    const nextMode = modeRef.current === 'work' ? 'break' : 'work';
    const nextSeconds =
      (nextMode === 'work' ? sessionMinutes : breakMinutes) * 60;
    setMode(nextMode);
    modeRef.current = nextMode;
    setSecondsLeft(nextSeconds);
    secondsLeftRef.current = nextSeconds;
    pushToCompleteCircles(nextMode);
    if (nextMode === 'break') nextModeName.current = 'break';
    if (nextMode === 'work') nextModeName.current = 'work';
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

    let interval = setInterval(() => {
      if (isPausedRef.current) {
        return;
      }
      if (secondsLeftRef.current === 0) {
        return switchMode();
      }
      if (completeCircles.length > numberOfSession) {
        return () => {
          clearInterval(interval);
        };
      }
      if (
        completeCircles.length === numberOfSession &&
        secondsLeftRef.current === 1
      ) {
        setTimeout(() => {
        completeRef.current = true;
          
        }, breakMinutes*60 * 100);
      }
      tick();
    }, 100);

    

    return () => clearInterval(interval);
  }, [sessionMinutes, breakMinutes, numberOfSession, completeCircles]);
  // console.log(completeRef.current);

  let minutes: any = Math.floor(secondsLeft / 60);
  if (minutes < 10) minutes = '0' + minutes;
  let seconds: any = secondsLeft % 60;
  if (seconds < 10) seconds = '0' + seconds;

  return ( 
    <div className='timer'>
      <TimerTop />
      <div className='timer__content'>
        <TimerName nextModeName={nextModeName} />
        <div className={classes.timerCountdown}>
          <div>
            <p>{minutes}</p> : <p>{seconds}</p>
          </div>
        </div>
        <TimerCircles />
        <TimerBtns
          isPausedRef={isPausedRef}
          isPaused={isPaused}
          setIsPaused={setIsPaused}
          completeRef={completeRef}
        />
      </div>
    </div>
  );
};

export default Timer;
