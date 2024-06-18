import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { IndicatorWrapper } from './style'

function Indicator(props) {
  const {selectIndex = 0} = props
  const contentRef = useRef()

  useEffect(() => {
    const scrollWidth = contentRef.current.scrollWidth
    const selectItemEl = contentRef.current.children[selectIndex]
    const itemleft = selectItemEl.offsetLeft
    const itemWidth = selectItemEl.clientWidth
    const contentWidth = contentRef.current.clientWidth
    let distance = itemleft + itemWidth * 0.5 - contentWidth * 0.5
    const totalDistance = scrollWidth - contentWidth
    if(distance < 0) distance = 0
    if(distance > totalDistance) distance = totalDistance
    contentRef.current.style.transform = `translate(${-distance}px)`
    
  },[selectIndex])

  return (
    <IndicatorWrapper >
      <div className='i-content' ref={contentRef}>
        {
          props.children
        }
      </div>
    </IndicatorWrapper>
  )
}

Indicator.propTypes = {
  selectIndex: PropTypes.number
}

export default Indicator

