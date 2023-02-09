import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ITimerState {
  sessionMinutes: number;
  breakDuration: number;
  numberOfSession: number;
}

const initialState: ITimerState = {
  sessionMinutes: 1,
  breakDuration: 17,
  numberOfSession: 5,
};

const TimerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    changeSessionMinutes: (state, action: PayloadAction<number>) => {
      state.sessionMinutes = action.payload;
    },
    minusSessionMinutes: (state) => {
      state.sessionMinutes--;
    },
    changebreakDuration: (state, action: PayloadAction<number>) => {
      state.breakDuration = action.payload;
    },
    changenumberOfSession: (state, action: PayloadAction<number>) => {
      state.numberOfSession = action.payload;
    },
  },
});

export const {
  changeSessionMinutes,
  minusSessionMinutes,
  changebreakDuration,
  changenumberOfSession,
} = TimerSlice.actions;

export default TimerSlice.reducer;
