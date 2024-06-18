import React, { useCallback } from 'react'
import { RoomsWrapper } from './style'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import RoomItem from '@/components/room-item'
import { changeDetailInfoAction } from '@/store/modules/detail'
import { useNavigate } from 'react-router-dom'


function EntireRooms(props) {

  const { roomList, totalCount, currentPage, isLoading } = useSelector((state) => ({
    roomList: state.entire.roomList,
    totalCount: state.entire.totalCount,
    currentPage: state.entire.currentPage,
    isLoading: state.entire.isLoading
  }),shallowEqual)
  
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const itemClickHandle = useCallback((item) => {
    dispatch(changeDetailInfoAction(item))
    navigate("/detail")
  },[navigate, dispatch])


  return (
    <RoomsWrapper>
      <h2 className="title">{totalCount}多出住所</h2>
      <div className="list">
        {roomList.map(item => {
          return <RoomItem 
          itemData={item}
          itemWidth="20%"
          key={item._id}
          itemClick={itemClickHandle}
            />
        })}
      </div>
      {isLoading && <div className='cover'></div>}
      

    </RoomsWrapper>
  )
}

EntireRooms.propTypes = {

}

export default EntireRooms

