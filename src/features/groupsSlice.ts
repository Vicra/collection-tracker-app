import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Group {
  _id: string;
  count: number;
}

export interface groupState {
  value: Array<Group>;
}

const initialState: groupState = {
  value: [
    {
      _id: "default",
      count: 0,
    },
  ],
};

export const groupSlice = createSlice({
  name: "group",
  initialState,
  reducers: {
    updateGroups: (state, action: PayloadAction<Array<Group>>) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateGroups } = groupSlice.actions;

export default groupSlice.reducer;
