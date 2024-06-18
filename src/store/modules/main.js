import { createSlice } from "@reduxjs/toolkit"


const mainSlice = createSlice({
  name: "main",
  initialState: {   
      isFixed: false,      
  },
  reducers: {
    changeHeaderConfigAction(state, { payload }) {
      state.isFixed = payload
    }
  }
})

export const { changeHeaderConfigAction } = mainSlice.actions
export default mainSlice.reducer
