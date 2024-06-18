import { getHomeGoodPriceData, getHomeHighScoreData, getHomeDiscountData, getHomeHotRecommendData , getHomeLongforData, getHomePlusData} from "@/services";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchHomeDataAction = createAsyncThunk("fetchdata",(payload,{dispatch}) => {
   getHomeGoodPriceData().then(res => {
    dispatch(changeGoodPriceInfoAction(res))
  })

    getHomeHighScoreData().then(res => {
      dispatch(changeHighScoreInfoAction(res))
    })

    getHomeDiscountData().then(res => {
      dispatch(changeDiscountInfoAction(res))
    })
    
    getHomeHotRecommendData().then(res => {
      dispatch(changeHotRecommendAction(res))
    })

    getHomeLongforData().then(res => {
      dispatch(changeLongforInfoAction(res))
    })
    getHomePlusData().then(res => {
      dispatch(changePlusInfoAction(res))
    })
})
const homeSlice = createSlice({
  name:"home",
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {},
    discountInfo: {},
    hotRecommendInfo: {},
    longforInfo: {},
    plusInfo: {}
  },
  reducers: {
    changeGoodPriceInfoAction(state, {payload}) {
      state.goodPriceInfo = payload
    },
    changeHighScoreInfoAction(state, {payload}) {
      state.highScoreInfo = payload
    },
    changeDiscountInfoAction(state, {payload}) {
      state.discountInfo = payload
    },
    changeHotRecommendAction(state, {payload}) {
      state.hotRecommendInfo = payload
    },
    changeLongforInfoAction(state, { payload }) {
      state.longforInfo = payload
    },
    changePlusInfoAction(state, { payload }) {
      state.plusInfo = payload
    }
  }
})


export const {
  changeGoodPriceInfoAction, 
  changeHighScoreInfoAction,
  changeDiscountInfoAction,
  changeHotRecommendAction,
  changeLongforInfoAction,
  changePlusInfoAction
} = homeSlice.actions

export default homeSlice.reducer