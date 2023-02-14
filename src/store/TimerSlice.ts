import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ITimerState {
  sessionMinutes: number;
  breakMinutes: number;
  numberOfSession: number;
  completeCircles: string[];
}

const initialState: ITimerState = {
  sessionMinutes: Number(localStorage.getItem('sessionMinutes')),
  breakMinutes: Number(localStorage.getItem('breakMinutes')),
  numberOfSession: Number(localStorage.getItem('numberOfSession')),
  completeCircles: [],
};


const TimerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    changeSessionMinutes: (state, action: PayloadAction<number>) => {
      state.sessionMinutes = action.payload;
      localStorage.setItem('sessionMinutes', state.sessionMinutes.toString())
    },
    minusSessionMinutes: (state) => {
      state.sessionMinutes--;
    },
    changebreakMinutes: (state, action: PayloadAction<number>) => {
      state.breakMinutes = action.payload;
      localStorage.setItem('breakMinutes', state.breakMinutes.toString())
    },
    changenumberOfSession: (state, action: PayloadAction<number>) => {
      state.numberOfSession = action.payload;
      localStorage.setItem('numberOfSession', state.numberOfSession.toString())
    },
    updateCompleteCircles: (state) => {
      state.completeCircles.push('complete');
    },
  },
});

export const {
  changeSessionMinutes,
  minusSessionMinutes,
  changebreakMinutes,
  changenumberOfSession,
  updateCompleteCircles,
} = TimerSlice.actions;

export default TimerSlice.reducer;
