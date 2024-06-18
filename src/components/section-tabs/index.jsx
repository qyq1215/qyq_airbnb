import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { TabsWrapper } from './style'
import classNames from 'classnames';
import ScollView from '@/base-ui/scoll-view';

function SectionTabs(props) {
  const {tabNames = [],tabClick} = props
  const [currentIndex, setcurrentIndex] = useState(0)
  function tabClickHandle(index,item) {
    setcurrentIndex(index)
    tabClick(item)
  }


  return (
    <TabsWrapper>
      {/* 插槽 */}
      <ScollView>
        {tabNames.map((item, index) => {
          return <div
            key={item}
            className={classNames("item", { active: currentIndex === index })}
            onClick={e => tabClickHandle(index, item)}
          >
            {item}
          </div>
        })}
      </ScollView>
    </TabsWrapper>
  )
}

SectionTabs.propTypes = {
  tabNames: PropTypes.array
}

export default SectionTabs

