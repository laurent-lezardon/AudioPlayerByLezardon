import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  current: 0,
  totalDuration: 0,
  playlistMode: false,
};

const progressSlice = createSlice({
  name: "progressSlice",
  initialState,
  reducers: {
    setUpProgressDatas: (state, action) => {
      // state.current = action.payload.currentTime;
      state.totalDuration = action.payload.totalDuration;
    },
    updateProgressDatas: (state, action) => {
      state.current = action.payload;
    },
    togglePlaylistMode: (state) => {
      state.playlistMode = !state.playlistMode;
    },
  },
});
export const { setUpProgressDatas, togglePlaylistMode, updateProgressDatas } =
  progressSlice.actions;
export default progressSlice.reducer;
