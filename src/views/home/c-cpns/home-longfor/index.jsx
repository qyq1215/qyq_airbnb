import React from 'react'
import PropTypes from 'prop-types'
import { LongforWrapper } from './style'
import SectionHeader from '@/components/section-header'
import LongforItem from '@/components/longfor-item'
import ScrollView from '@/base-ui/scoll-view'

function HomeLongfor(props) {

    const {dataInfo} = props
    
  return (
    <LongforWrapper>
      <SectionHeader title={dataInfo.title} subtitle={dataInfo.subtitle}/>
      <div className="longfor-list">
        <ScrollView>
          {
          dataInfo.list.map(item => {
            return <LongforItem itemData={item} key={item.city}/>
          })
          }
        </ScrollView>
      </div>
    </LongforWrapper>
  )
}

HomeLongfor.propTypes = {
  dataInfo: PropTypes.object
}

export default HomeLongfor

