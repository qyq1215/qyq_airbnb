import React, { useState } from 'react'
import { PicturesWrapper } from './style'
import { shallowEqual, useSelector } from 'react-redux'
import PictureBrowser from '@/base-ui/pciture-browser'

export default function DetailPictures() {
  const {detailInfo} = useSelector((state) => ({
    detailInfo: state.detail.detailInfo
  }),shallowEqual)
  const [showBrowser, setShowBrowser] = useState(false)


  return (
    <PicturesWrapper>
      <div className="pictures">
        <div className="left">
          <div className="item" onClick={e => setShowBrowser(true)}>
            <img src={detailInfo?.picture_urls?.[0]} alt="" />
            <div className='cover'></div>
          </div>
        </div>
        <div className="right">
          {
            detailInfo?.picture_urls?.slice(1,5).map(item => {
              return (
                <div className="item" key={item} onClick={e => setShowBrowser(true)}>
                <img src={item} alt="" />
                <div className="cover"></div>
              </div>)
            })
          }
        </div>
      </div>
      <div className='show-btn' onClick={e => setShowBrowser(true)}>显示照片</div>
      {showBrowser && <PictureBrowser
       closeClick={e => setShowBrowser(false)}
        pictureUrls={detailInfo.picture_urls}
       />}
    </PicturesWrapper>
  )
}
