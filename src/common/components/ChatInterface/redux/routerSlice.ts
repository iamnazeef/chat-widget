import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../../redux/store";
import routes from "../routes"; 

const initialState = {
    currentRoute: routes['newChat'],
};

interface Route {
    path: string;
    params?: object;
}

const routerSlice = createSlice({
    name: "routerSlice",
    initialState,
    reducers: {
        setCurrentRoute: (state, action: PayloadAction<Route>) => {
            if (!(action.payload.path in routes)) {
              state.currentRoute = initialState.currentRoute;
              return;
            }
            
            const route = routes[action.payload.path];
            state.currentRoute = {
                ...route,
                params: action.payload.params,
            };
        },
    },
})


export const { setCurrentRoute } = routerSlice.actions;
export default routerSlice.reducer;

export const selectRouteSlice = (state: RootState) => state.chatInterfaceRouter.currentRoute;
