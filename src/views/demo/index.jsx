import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { DemoWrapper } from './style'
import Indicator from '@/base-ui/indicator'

function Demo(props) {
  const names = ["abc", "cba", "nba", "mba", "aaa", "bbb", "ccc", "ddd"]
  const [selectIndex, setSelectIndex] = useState(0)
  function toggleClickHandle(isRight) {
    let newIndex = isRight ? selectIndex + 1 : selectIndex - 1
    if(newIndex < 0) newIndex =  names.length - 1
    if(newIndex >= names.length) newIndex = 0
    setSelectIndex(newIndex)
    // console.log(newIndex);
  }



  return (
    <DemoWrapper>
      <div className='control'>
        <button onClick={e => toggleClickHandle(false)}>上一个</button>
        <button onClick={e => toggleClickHandle(true)}> 下一个</button>
      </div >
      <div className='list'>
        <Indicator selectIndex={selectIndex}>
          {
            names.map(item => {
              return <button key={item}>{item}</button>
            })
          }
        </Indicator>
      </div>
    </DemoWrapper>
  )
}

Demo.propTypes = {

}

export default Demo

