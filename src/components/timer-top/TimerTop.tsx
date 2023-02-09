import React from 'react';

import { BsArrowCounterclockwise } from 'react-icons/bs';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../store/store';
import { changeSessionMinutes } from '../../store/TimerSlice';

import classes from './TimerTop.module.scss';

interface ITimerTopProps {
  minutes: number;
  seconds: number;
  onRebootTimer: (num: number, sec: number) => void;
}

const TimerTop: React.FC<ITimerTopProps> = ({
  minutes,
  seconds,
  onRebootTimer,
}) => {
  const dispatch = useDispatch();

  const sessionDuration = useSelector(
    (state: RootState) => state.timer.sessionMinutes
  );
  // {console.log(minutes, seconds);
  // }
  const rebootTimer = () => {
    minutes = sessionDuration;
    seconds = 0;
    onRebootTimer(minutes, seconds);
  };

  return (
    <div className={classes.timerTop}>
      <div className='timer__top-btns'>
        <button onClick={rebootTimer} className={classes.rebootBtn}>
          <BsArrowCounterclockwise />
        </button>
        <Link to={'/settings'}>
          <button className={classes.settingsBtn}>
            <BsThreeDotsVertical />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TimerTop;
