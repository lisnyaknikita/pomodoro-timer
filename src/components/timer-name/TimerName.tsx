import React from 'react'

import classes from './TimerName.module.scss'

const TimerName: React.FC = () => {
  

  return (
    <input className={classes.timerName} type="text" placeholder="Hard work" />
  )
}

export default TimerName