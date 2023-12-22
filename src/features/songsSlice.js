import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  songs: undefined,
  currentId: undefined,
  play: false,
  volume: 50,
};

const songsSlice = createSlice({
  name: "songsSlice",
  initialState,
  reducers: {
    addSongsDataBase: (state, action) => {
      state.songs = action.payload;
      state.currentId = action.payload[0].id;
    },
    togglePlayPause: (state) => {
      state.play = !state.play;
    },
    nextSong: (state, action) => {
      state.currentId = state.songs[action.payload].id;
    },
    selectSong: (state, action) => {
      state.currentId = action.payload;
    },
    deleteSongs: (state) => {
      state.songs = undefined;
    },
  },
});
export const {
  addSongsDataBase,
  togglePlayPause,
  deleteSongs,
  nextSong,
  selectSong,
} = songsSlice.actions;
export default songsSlice.reducer;
