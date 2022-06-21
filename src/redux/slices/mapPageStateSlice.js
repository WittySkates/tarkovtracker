import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "mapPageState",
  initialState: {
    drawer: true,
    location: "Customs",
    map: 0
  },
  reducers: {
    setDrawerState: (state, action) => {
      state.drawer = action.payload;
    },
    setLocationState: (state, action)=>{
      state.location = action.payload;
    },
    setMapState: (state, action)=>{
      state.map = action.payload;
    }
  }
});

export const { setDrawerState, setLocationState, setMapState } = slice.actions;
export default slice.reducer;
