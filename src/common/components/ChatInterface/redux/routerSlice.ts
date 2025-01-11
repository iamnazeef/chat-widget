import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../../redux/store";
import routes from "../routes";

const initialState = {
    currentRoute: routes['new-chat'],
};

const routerSlice = createSlice({
    name: "routerSlice",
    initialState,
    reducers: {
        setCurrentRoute: (state, action: PayloadAction<string>) => {
            if (!(action.payload in routes)) {
              state.currentRoute = initialState.currentRoute;
              return;
            }
            
            state.currentRoute = routes[action.payload];
        },
    },
})


export const { setCurrentRoute } = routerSlice.actions;
export default routerSlice.reducer;

export const selectRouteSlice = (state: RootState) => state.chatInterfaceRouter.currentRoute;
