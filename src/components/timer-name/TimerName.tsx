import React from 'react'

import classes from './TimerName.module.scss'

interface ITimerName {
  nextModeName: React.MutableRefObject<string>
}

const TimerName: React.FC<ITimerName> = ({nextModeName}) => {
  

  return (
    // <input className={classes.timerName} type="text" defaultValue={nextModeName.current === 'break' ? 'Work session' : 'Break'} />
    <p className={classes.timerName}>{nextModeName.current === 'work' ? 'Work session' : 'Break'}</p>
  )
}

export default TimerName