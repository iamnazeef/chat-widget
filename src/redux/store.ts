import { configureStore } from "@reduxjs/toolkit"
import chatInterfaceRouter from "../common/components/ChatInterface/redux/routerSlice";

export const store = configureStore({
    reducer: {
        chatInterfaceRouter,
    }
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;