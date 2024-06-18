import { getEntireRoomList } from "@/services/modules/entire";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchRoomListAction = createAsyncThunk("fetchdata", (page = 0, { dispatch }) => {
  dispatch(changeIsLoadingAction(true))
  getEntireRoomList(page * 20).then(res => {
    const roomList = res.list
    const totalCount = res.totalCount   
    dispatch(changeRoomListAction(roomList))
    dispatch(changeIsLoadingAction(false))
    dispatch(changeCurrentPageAction(page))
    dispatch(changeTotalCountAction(totalCount))   
  })
})

const entireSlice = createSlice({
  name: "entire",
  initialState: {
    currentPage: 0,
    roomList: [],
    totalCount: 0,
    isLoading: false
  },
  reducers: {
    changeCurrentPageAction(state, {payload}) {
      state.currentPage = payload
    },
     changeRoomListAction(state, { payload }) {
      state.roomList = payload
    },
    changeTotalCountAction(state, { payload }) {
      state.totalCount = payload
    },
    changeIsLoadingAction(state, { payload }) {
      state.isLoading = payload
    }
  }
})


export const { changeCurrentPageAction, changeRoomListAction, changeTotalCountAction, changeIsLoadingAction } = entireSlice.actions
export default entireSlice.reducer