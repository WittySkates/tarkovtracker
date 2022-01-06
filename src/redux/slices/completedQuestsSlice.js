import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "completedQuests",
  initialState: {
    value: {}
  },
  reducers: {
    setCompletedQuests: (state, action) => {
      state.value[action.payload.trader] = action.payload.completedQuestsRes;
    }
  }
});

export const { setCompletedQuests } = slice.actions;
export default slice.reducer;
