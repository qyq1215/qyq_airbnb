import React, { memo, useEffect } from 'react'
import HomeBanner from './c-cpns/home-banner'
import { HomeWrapper } from './style'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'


import { fetchHomeDataAction } from '@/store/modules/home'
import HomeSectionV1 from '@/views/home/c-cpns/home-section-v1'

import HomeSectionV2 from './c-cpns/home-section-v2'
import { isEmptyO } from '@/utils/is-empty-object'
import HomeLongfor from './c-cpns/home-longfor'
import HomeSectionV3 from './c-cpns/home-section-v3'
import { changeHeaderConfigAction } from '@/store/modules/main'



export default memo(function Home() {

  // 从redux中获取数据
  const { goodPriceInfo, highScoreInfo, discountInfo, hotRecommendInfo,longforInfo, plusInfo } = useSelector((state) => ({
    goodPriceInfo: state.home.goodPriceInfo,
    highScoreInfo: state.home.highScoreInfo,
    discountInfo: state.home.discountInfo,
    hotRecommendInfo: state.home.hotRecommendInfo,
    longforInfo: state.home.longforInfo,
    plusInfo: state.home.plusInfo
  }),shallowEqual)

  // 发送网络请求
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeDataAction())
    dispatch(changeHeaderConfigAction({isFixed:true}))
  },[dispatch])//dispatch改变再请求

  console.log(isEmptyO(goodPriceInfo));
  return (
    <HomeWrapper>     
      <HomeBanner/>      
      <div className="content">          
        {isEmptyO(discountInfo) && <HomeSectionV2 dataInfo={discountInfo}/>}
        {isEmptyO(hotRecommendInfo) && <HomeSectionV2 dataInfo={hotRecommendInfo} />}
        {isEmptyO(longforInfo) && <HomeLongfor dataInfo={longforInfo} />}
        {isEmptyO(goodPriceInfo) && <HomeSectionV1 dataInfo={goodPriceInfo}/>}
        {isEmptyO(highScoreInfo) && <HomeSectionV1 dataInfo={highScoreInfo}/>} 
        {isEmptyO(plusInfo) && <HomeSectionV3 dataInfo={plusInfo} />} 
      </div>
      
    </HomeWrapper>
  )
})
