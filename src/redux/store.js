import { configureStore } from "@reduxjs/toolkit";
import completedQuestsReducer from "./slices/completedQuestsSlice";
import drawerStateReducer from "./slices/mapPageStateSlice";
import locationStateReducer from "./slices/mapPageStateSlice";
import mapStateReducer from "./slices/mapPageStateSlice";

export default configureStore({
  reducer: {
    completedQuests: completedQuestsReducer,
    drawerState: drawerStateReducer,
    locationState: locationStateReducer,
    mapState: mapStateReducer
  }
});
