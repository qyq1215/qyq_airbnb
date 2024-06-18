import {React, useCallback, useState} from 'react'
import PropTypes from 'prop-types'
import { SectionV2Wrapper } from './style'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import SectionTabs from '@/components/section-tabs'
import SectionFooter from '@/components/section-footer'

function HomeSectionV2(props) {

  const {dataInfo} = props
  const initialName = Object.keys(dataInfo.dest_list)[0]
  const tabNames = dataInfo.dest_address?.map(item => item.name)
  const [name, setname] = useState(initialName)

  const tabClickHandle = useCallback(function (item) {
    setname(item)
  },[]) 
  return (
    <SectionV2Wrapper>      
        <SectionHeader title={dataInfo.title} subtitle={dataInfo.subtitle} />
        <SectionTabs tabNames={tabNames} tabClick={tabClickHandle} />
        <SectionRooms roomList={dataInfo?.dest_list?.[name]} itemWidth="33.3333%" />
        <SectionFooter name={name}/>
    </SectionV2Wrapper>
  )
}

HomeSectionV2.propTypes = {
  dataInfo:PropTypes.object
}

export default HomeSectionV2

