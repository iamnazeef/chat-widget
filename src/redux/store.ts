import { configureStore } from "@reduxjs/toolkit"
import chatInterfaceRouter from "../common/components/ChatInterface/redux/routerSlice";
import widgetSetupSlice from "../features/widget/redux/widgetSetupSlice";

export const store = configureStore({
    reducer: {
        chatInterfaceRouter,
        widgetSetupSlice,
    }
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;