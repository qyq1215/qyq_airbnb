import React, { memo, useEffect } from 'react'
import DetailPictures from './detail-pictures'
import { useDispatch } from 'react-redux'
import { changeHeaderConfigAction } from '@/store/modules/main'

export default memo(function Detail() {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(changeHeaderConfigAction({ isFixed: false}))
  }, [dispatch])

  return (
    <div>
      <DetailPictures/>
    </div>
  )
})
