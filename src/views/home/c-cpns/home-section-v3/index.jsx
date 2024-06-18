import PropTypes from 'prop-types'
import React, { memo } from 'react'

import SectionHeader from '@/components/section-header'
import { SectionV3Wrapper } from './style'
import RoomItem from '@/components/room-item'
import SectionFooter from '@/components/section-footer'
import ScrollView from '@/base-ui/scoll-view'

const HomeSectionV3 = memo((props) => {
  const { dataInfo } = props

  return (
    <SectionV3Wrapper>
      <SectionHeader title={dataInfo.title} subtitle={dataInfo.subtitle}/>
      <div className='room-list'>
        <ScrollView>
          {
            dataInfo.list.map(item => {
              return <RoomItem itemData={item} itemWidth="20%" key={item.id}/>
            })
          }
        </ScrollView>
      </div>
      <SectionFooter name="plus"/>
    </SectionV3Wrapper>
  )
})

HomeSectionV3.propTypes = {
  dataInfo: PropTypes.object
}

export default HomeSectionV3