import { createSlice } from "@reduxjs/toolkit";
import { FilterTaskType } from "../../type/type";

const initialState: FilterTaskType = {
  filter: undefined,
};

// Task filter slice
const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    // filter task based on completed , uncompleted or total
    filterTask: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { filterTask } = filterSlice.actions;
export default filterSlice.reducer;
