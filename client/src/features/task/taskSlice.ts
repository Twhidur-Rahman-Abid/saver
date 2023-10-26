import { createSlice } from "@reduxjs/toolkit";

interface stateType {
  hasEditable: boolean;
  editableTask: null | object;
}

const initialState: stateType = {
  hasEditable: false,
  editableTask: null,
};

const taskSlice = createSlice({
  name: "taskSlice",
  initialState,
  reducers: {
    // Add editable task
    addEditableTask(state, action) {
      state.hasEditable = true;
      state.editableTask = action.payload;
    },

    // Remove editable task
    removeEditableTask(state) {
      state.hasEditable = false;
      state.editableTask = null;
    },
  },
});

export const { addEditableTask, removeEditableTask } = taskSlice.actions;

export default taskSlice.reducer;
