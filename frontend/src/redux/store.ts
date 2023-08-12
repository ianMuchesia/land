import { configureStore} from "@reduxjs/toolkit"
import loadSlice from "./Features/loadSlice";
import authSlice from "./Features/authSlice";
import { api } from "./services/Api";
import { setupListeners } from "@reduxjs/toolkit/query";


export const store = configureStore({
    reducer:{
        load: loadSlice,
        auth: authSlice,
        [api.reducerPath]: api.reducer
    },
    middleware: (getDefault)=>getDefault().concat(api.middleware)
})
setupListeners(store.dispatch)


export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;