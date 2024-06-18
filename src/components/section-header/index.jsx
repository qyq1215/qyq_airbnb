import React from 'react'
import { HeaderWrapper } from './style'
import PropTypes from 'prop-types'

function SectionHeader(props) {
  const {title, subtitle} = props
  return (
    <HeaderWrapper>
      <h2 className='title'>{title}</h2>
      {subtitle && <div className='subtitle'>{subtitle}</div>}
    </HeaderWrapper>
  )
}

SectionHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
}

export default SectionHeader

