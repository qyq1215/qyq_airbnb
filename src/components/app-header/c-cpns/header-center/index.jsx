import React, { memo } from 'react'
import { CenterWrapper } from './style'
import IconSearchBar from '@/assets/svg/icon-search-bar'

export default memo(function HeaderCenter() {
  return (
    <CenterWrapper>
      <div className="search-bar">
        <div className="text">
          搜索房源和体验
        </div>
        <div className="icon">
          <IconSearchBar/>
        </div>
      </div>
    </CenterWrapper>
  )
})
