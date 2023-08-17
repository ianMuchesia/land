import { configureStore } from "@reduxjs/toolkit";
import toggleSlice from "./toggleSlice";
import loadSlice from "./loadSlice";
import { api } from "./Api";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import authSlice from "./authSlice";
import modalSlice from "./modalSlice";

// ...

export const store = configureStore({
  reducer: {
    toggle: toggleSlice,
    load: loadSlice,
    auth: authSlice,
    modal: modalSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefault) => getDefault().concat(api.middleware),
});
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
