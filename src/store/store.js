import { configureStore } from "@reduxjs/toolkit";
import { dateSlice } from "./slices/dateSlice";

// const middleware = [...getDefaultMiddleware(), serializableCheck];

export const store = configureStore({
  reducer: {
    date: dateSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
