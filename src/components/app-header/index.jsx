import React from 'react'
import { HeadWrapper } from './style'
import HeaderCenter from './c-cpns/header-center'
import HeaderLeft from './c-cpns/header-left'
import HeaderRight from './c-cpns/header-right'
import classNames from 'classnames'
import { shallowEqual, useSelector } from 'react-redux'
import store from '@/store'

export default function AppHeader() {

  const {isFixed} = useSelector((state) => ({
    isFixed : state.main.isFixed 
  }),shallowEqual)

  return (
    <HeadWrapper className={classNames({ fixed: isFixed })}>
      <HeaderLeft/>
      <HeaderCenter/>      
      <HeaderRight/>
    </HeadWrapper>
  )
}
