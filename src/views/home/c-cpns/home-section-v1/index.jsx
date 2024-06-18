import React from 'react'
import PropTypes from 'prop-types'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'

import { SectionV1Wrapper } from './style'
import SectionFooter from '@/components/section-footer'

function HomeSectionV1(props) {
  const {dataInfo} = props

  return (
    <SectionV1Wrapper>
      <SectionHeader title={dataInfo.title} subtitle={dataInfo.subtitle} />
      <SectionRooms roomList={dataInfo.list} itemWidth="25%"/>
      <SectionFooter/>
    </SectionV1Wrapper>    
  )
}

HomeSectionV1.propTypes = {
  dataInfo: PropTypes.object
}

export default HomeSectionV1

