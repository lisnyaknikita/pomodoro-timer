import { useSelector } from 'react-redux/es/exports';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { Link } from 'react-router-dom';
import { RootState } from '../store/store';
import {
  changebreakDuration,
  changenumberOfSession,
  changeSessionMinutes,
} from '../store/TimerSlice';

const SettingsPage: React.FC = () => {
  const sessionDuration = useSelector(
    (state: RootState) => state.timer.sessionMinutes
  );
  const breakDuration = useSelector(
    (state: RootState) => state.timer.breakDuration
  );
  const numberOfSession = useSelector(
    (state: RootState) => state.timer.numberOfSession
  );

  const dispatch = useDispatch();

  const onChangeSessionDuration = (e: React.ChangeEvent<HTMLInputElement>) => {
    const sessionDuration: number = +e.target.value;
    dispatch(changeSessionMinutes(sessionDuration));
  };

  const onChangebreakDuration = (e: React.ChangeEvent<HTMLInputElement>) => {
    const breakDuration: number = +e.target.value;
    dispatch(changebreakDuration(breakDuration));
  };
  const onChangenumberOfSession = (e: React.ChangeEvent<HTMLInputElement>) => {
    const number: number = +e.target.value;
    dispatch(changenumberOfSession(number));
  };

  return (
    <div className='timer__settings'>
      <div className='timer__settings-inner'>
        <input
          className='input'
          type='number'
          placeholder='Enter the work session duration...'
          value={sessionDuration}
          onChange={onChangeSessionDuration}
        />
        <input
          className='input'
          type='number'
          placeholder='Enter the break duration...'
          value={breakDuration}
          onChange={onChangebreakDuration}
        />
        <input
          className='input'
          type='number'
          placeholder='Enter the number of sessions...'
          value={numberOfSession}
          onChange={onChangenumberOfSession}
        />
        <Link to={'/'}>
          <button className='timer__settings-btn'>Save</button>
        </Link>
      </div>
    </div>
  );
};

export default SettingsPage;
