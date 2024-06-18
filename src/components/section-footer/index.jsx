import React from 'react'
import PropTypes from 'prop-types'
import { SectionFooterWrapper } from './style'
import IconMoreArrow from '@/assets/svg/icon-more-arrow'
import { useNavigate } from 'react-router-dom'

function SectionFooter(props) {
  const {name} = props
  let showMessage = "查看更多"
  if(name) {
    showMessage = `查看更多${name}房源`
  }

  const navigate = useNavigate()

  function moreClickHandle() {
    navigate("/entire")
  }

  return (
    <SectionFooterWrapper color={name ? "#00848A" : "#000"}>
      <div className="info" onClick={moreClickHandle}>
        <span className='text'>{showMessage}</span>
        <span className='icon'><IconMoreArrow /></span>
      </div>
    </SectionFooterWrapper>
  )
}

SectionFooter.propTypes = {
  name:PropTypes.string
}

export default SectionFooter

