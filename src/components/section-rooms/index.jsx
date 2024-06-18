import React, { memo } from 'react'
import PropTypes from 'prop-types'
import RoomItem from '../room-item'
import { SectionRoomWrapper } from './style'

const SectionRooms = memo(function SectionRooms(props) {
  const {roomList, itemWidth} = props

  return (
    <SectionRoomWrapper>
      {
        roomList?.slice(0, 8)?.map(item => {
          return <RoomItem itemData={item} key={item.id} itemWidth={itemWidth}/>
        })
      }
    </SectionRoomWrapper>     
  )
})

SectionRooms.propTypes = {
  roomList: PropTypes.array
}

export default SectionRooms
