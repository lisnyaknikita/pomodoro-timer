import React from 'react';

import { BsArrowCounterclockwise } from 'react-icons/bs';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../store/store';


import classes from './TimerTop.module.scss';

const TimerTop: React.FC = () => {



  return (
    <div className={classes.timerTop}>
      <div className='timer__top-btns'>
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
