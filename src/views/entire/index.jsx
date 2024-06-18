import React, { memo, useEffect } from 'react'
import { EntireWrapper } from './style'
import EntireFilter from './c-cpns/entire-filter'
import EntirePagination from './c-cpns/entire-pagination'
import EntireRooms from './c-cpns/entire-rooms'
import { useDispatch } from 'react-redux'
import { fetchRoomListAction } from '@/store/modules/entire'
import { changeHeaderConfigAction } from '@/store/modules/main'



const Entire = memo(() => {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchRoomListAction())
    dispatch(changeHeaderConfigAction(true))
  },[dispatch])

  return (
    <EntireWrapper>
      <EntireFilter/>
      <EntireRooms />
      <EntirePagination/>     
    </EntireWrapper>
  )
})

export default Entire
