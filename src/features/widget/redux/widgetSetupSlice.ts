import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WidgetSetupData } from "./models";
import { RootState } from "../../../redux/store";

const initialState: WidgetSetupData = {
    visitorId: "",
    organisation: { 
        name: "",
        brandConfig: {
            logo: "",
            primaryColor: "",
        },
        humanSupportEnabled: false,
    }
}

const widgetSetupSlice = createSlice({
    name: "widgetSetupData",
    initialState,
    reducers: {
        saveWidgetSetupData: (state, action: PayloadAction<WidgetSetupData>) => {
            state = action.payload;
        }
    }
})



export const { saveWidgetSetupData } = widgetSetupSlice.actions;
export default widgetSetupSlice.reducer;

export const selectwidgetSetupSlice = (state: RootState) => state.widgetSetupSlice;
