import { configureStore } from "@reduxjs/toolkit";
import completedQuestsReducer from "./slices/completedQuestsSlice";

export default configureStore({
  reducer: {
    completedQuests: completedQuestsReducer
  }
});
