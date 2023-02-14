import { useSelector } from 'react-redux/es/exports';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { Link } from 'react-router-dom';
import { RootState } from '../store/store';
import {
  changebreakMinutes,
  changenumberOfSession,
  changeSessionMinutes,
} from '../store/TimerSlice';

const SettingsPage: React.FC = () => {
  const sessionDuration = useSelector(
    (state: RootState) => state.timer.sessionMinutes
  );
  const breakMinutes = useSelector(
    (state: RootState) => state.timer.breakMinutes
  );
  const numberOfSession = useSelector(
    (state: RootState) => state.timer.numberOfSession
  );

  const dispatch = useDispatch();

  const onChangeSessionDuration = (e: React.ChangeEvent<HTMLInputElement>) => {
    const sessionDuration: number = +e.target.value;
    dispatch(changeSessionMinutes(sessionDuration));
  };

  const onChangebreakMinutes = (e: React.ChangeEvent<HTMLInputElement>) => {
    const breakMinutes: number = +e.target.value;
    dispatch(changebreakMinutes(breakMinutes));
  };
  const onChangenumberOfSession = (e: React.ChangeEvent<HTMLInputElement>) => {
    const number: number = +e.target.value;
    dispatch(changenumberOfSession(number));
  };

  return (
    <div className='timer__settings'>
      <div className='timer__settings-inner'>
        <div className='timer__row'>
          <label htmlFor='#sessionDuration'>Enter the session duration(min)</label>
          <input
            id='sessionDuration'
            className='input'
            type='number'
            placeholder='Enter the work session duration...'
            value={sessionDuration}
            onChange={onChangeSessionDuration}
          />
        </div>
        <div className="timer__row">
          <label htmlFor="#breakMinutes">Enter the break duration(min)</label>
          <input
          id='breakMinutes'
          className='input'
          type='number'
          placeholder='Enter the break duration...'
          value={breakMinutes}
          onChange={onChangebreakMinutes}
        />
        </div>
        <div className="timer__row">
          <label htmlFor="#numberOfSession">Enter the number of sessions</label>
          <input
          id='numberOfSession'
          className='input'
          type='number'
          placeholder='Enter the number of sessions...'
          value={numberOfSession}
          onChange={onChangenumberOfSession}
        />
        </div>
        
        <Link to={'/'} style={{ display: 'contents' }}        >
          <button className='timer__settings-btn'>Save</button>
        </Link>
      </div>
    </div>
  );
};

export default SettingsPage;
