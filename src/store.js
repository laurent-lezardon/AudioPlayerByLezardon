import { configureStore } from "@reduxjs/toolkit";
import songsSlice from "./features/songsSlice";
import progressSlice from "./features/progressSlice";

export const store = configureStore({
  reducer: {
    songsSlice,
    progressSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
