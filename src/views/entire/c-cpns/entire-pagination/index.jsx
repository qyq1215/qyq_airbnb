import React from 'react'

import { PaginationWrapper } from './style'
import Pagination from '@mui/material/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRoomListAction } from '@/store/modules/entire';

function EntirePagination(props) {
  const { roomList, totalCount, currentPage } = useSelector((state) => ({
    roomList: state.entire.roomList,
    totalCount: state.entire.totalCount,
    currentPage: state.entire.currentPage   
  }))

  const dispatch = useDispatch()

  const startCount = currentPage * 20 + 1
  const endCount = startCount + 19

  function pageChangeHandle(e,newPage) {
    window.scrollTo(0,0)
    dispatch(fetchRoomListAction(newPage - 1))
  }



  return (
    <PaginationWrapper>
      <div className="info">
        <Pagination count={10} onChange={pageChangeHandle}/>
        <div className="desc">
          第 {startCount} - {endCount} 个房源, 共超过 {totalCount} 个         
        </div>
      </div>
      
    </PaginationWrapper>
  )
}

export default EntirePagination

